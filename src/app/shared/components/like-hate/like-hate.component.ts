import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Input() like =true;
  @Input() hate = true;
  @Output() evtLikeHate = new EventEmitter<LikeHate>();

  @Input() Like () {
    this.evtLikeHate.emit(LikeHate.LIKE)
  }

  @Input() Hate () {
    this.evtLikeHate.emit(LikeHate.HATE)
  }

}
