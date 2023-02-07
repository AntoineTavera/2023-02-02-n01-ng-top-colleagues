import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {Subject} from "rxjs";
import {LikeHate} from "../models/like-hate";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private subjectCompter = new Subject<LikeHate>();
  listColleagues: Colleague[] = [
    {
      pseudo: "Naufragé",
      score: 100,
      photo: "http://randomuser.me/api/portraits/men/81.jpg"
    },
    {
      pseudo: "Galerien",
      score: 100,
      photo: "http://randomuser.me/api/portraits/men/83.jpg"
    },
    {
      pseudo: "Rescapé",
      score: 100,
      photo: "http://randomuser.me/api/portraits/men/89.jpg"
    }
    ]

getListCollegues(): Colleague[] {
  return this.listColleagues;
}

publierVote (likeHate:LikeHate) {
this.subjectCompter.next(likeHate);
}

observerVote () {
return this.subjectCompter.asObservable();
  }
}

