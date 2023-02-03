import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
    @Input() colleague : Colleague = {
    pseudo: "toto",
    score: 100,
    photo: "http://randomuser.me/api/portraits/men/81.jpg"
  }

  modifierScore (vote:LikeHate) {
      if (vote == LikeHate.LIKE) {
        this.colleague.score += 1;
      } else {
        this.colleague.score-=1;
      }
  }






}
