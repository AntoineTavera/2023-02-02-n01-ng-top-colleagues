import { Component } from '@angular/core';
import {ColleagueService} from "../../../providers/colleague.service";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  compteurLike=0;
  compteurHate=0;

constructor(private colleagueSRV : ColleagueService) {
this.colleagueSRV.observerVote().subscribe(vote => {
  if (vote === LikeHate.HATE)
    this.compteurHate++;
  else this.compteurLike ++;
})
}
}
