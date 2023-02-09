import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ColleagueService} from "../../providers/colleague.service";
import {Colleague} from "../../models/colleague";
import {CollegueComplet} from "../../models/collegue-complet";

@Component({
  selector: 'tc-collegue-detaille',
  templateUrl: './collegue-detaille.page.html',
  styleUrls: ['./collegue-detaille.page.scss']
})
export class CollegueDetaillePage {
  pseudo?:string;
  colleagueDetaille!: CollegueComplet;

  constructor(
    private collegueSRV: ColleagueService, private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        const pre = paramMap.get("pseudo") // {path: 'detail/:prenom', component: DetailPage},
        if(pre) {
          this.pseudo = pre;
          this.collegueSRV.getColleguebyPseudo(this.pseudo).subscribe(c => this.colleagueDetaille = c)
        }
      })
  }
}
