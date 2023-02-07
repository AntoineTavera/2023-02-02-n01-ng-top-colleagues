import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague: Colleague = {
    pseudo: "toto",
    score: 100,
    photo: "http://randomuser.me/api/portraits/men/81.jpg"
  }

  likeDisabled = false;
  hateDisabled = false;

  constructor(private colleagueSRV :ColleagueService) {
  }
  modifierScore (vote:LikeHate) {
      if (vote == LikeHate.LIKE) {
        this.colleague.score += 50;
      } else {
        this.colleague.score-=50;
      }
      this.colleagueSRV.publierVote(vote)
      if(this.colleague.score > 999) {
        this.likeDisabled = true;
      } else {
        this.likeDisabled = false;
      }
    if(this.colleague.score < -999) {
      this.hateDisabled = true;
    } else {
      this.hateDisabled = false;
    }
  }
}
