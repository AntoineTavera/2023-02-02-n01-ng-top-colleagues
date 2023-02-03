import {Component, EventEmitter, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Output() evtLikeHate = new EventEmitter<LikeHate>();

  Like () {
    this.evtLikeHate.emit(LikeHate.LIKE)
  }

  Hate () {
    this.evtLikeHate.emit(LikeHate.HATE)
  }

}
