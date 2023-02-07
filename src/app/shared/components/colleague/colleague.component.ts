import {Component, Input, OnInit} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit{
  @Input() colleague!: Colleague;

  likeDisabled = false;
  hateDisabled = false;


constructor(private colleagueSRV: ColleagueService) {

}
activationBouton() {
  this.likeDisabled = this.colleague.score > 999;
  if(this.colleague.score < -999) {
    this.hateDisabled = true;
  } else {
    this.hateDisabled = false;
  }
}
  modifierScore (vote:LikeHate) {
      this.colleagueSRV.postData({colleague: this.colleague, vote: vote})
        .subscribe(data => {
        this.colleague.score = data.score;
          this.colleagueSRV.publierVote(vote);
          this.activationBouton();
      })
  }

  ngOnInit(): void {
    this.activationBouton();
  }


}
