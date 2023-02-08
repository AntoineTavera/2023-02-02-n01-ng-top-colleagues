import { Component } from '@angular/core';
import {CollegueComplet} from "../../models/collegue-complet";
import {ColleagueService} from "../../providers/colleague.service";

@Component({
  selector: 'tc-create-colleague',
  templateUrl: './create-colleague.page.html',
  styleUrls: ['./create-colleague.page.scss']
})
export class CreateColleaguePage {

  constructor(private collegueSRV:ColleagueService) {
  }

  collegueCreate: Partial<CollegueComplet> = {};

  creerCollegue() {
    return this.collegueSRV.posterRequeteCollegue(this.collegueCreate).subscribe(()=> this.message = 'Le collègue a été crée');
  }
  message:String ="";
}
