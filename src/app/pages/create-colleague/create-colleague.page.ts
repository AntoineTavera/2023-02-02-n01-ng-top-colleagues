import { Component } from '@angular/core';
import {CollegueComplet} from "../../models/collegue-complet";
import {ColleagueService} from "../../providers/colleague.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tc-create-colleague',
  templateUrl: './create-colleague.page.html',
  styleUrls: ['./create-colleague.page.scss']
})
export class CreateColleaguePage {

  constructor(private collegueSRV:ColleagueService, private router:Router) {
  }

  collegueCreate: Partial<CollegueComplet> = {};

  creerCollegue() {
     this.collegueSRV.posterRequeteCollegue(this.collegueCreate).subscribe(()=> {
       this.router.navigateByUrl("/colleague")
     });
  }
  message:String ="";
}
