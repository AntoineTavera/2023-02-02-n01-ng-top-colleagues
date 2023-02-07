import {Component} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  listColleagues: Colleague[] = [];

  constructor(private colleagueSRV :ColleagueService) {
    this.colleagueSRV.rechercherCollegues().subscribe(c => this.listColleagues = c);
}
}
