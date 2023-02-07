import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {Observable, Subject} from "rxjs";
import {LikeHate} from "../models/like-hate";
import {HttpClient} from "@angular/common/http";
import {Vote} from "../models/vote";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private subjectCompter = new Subject<LikeHate>();

  constructor(private http:HttpClient) {
  }
  rechercherCollegues(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>("https://dev.cleverapps.io/api/v2/colleagues");
  }
  listColleagues: Colleague[] = [];
  postData(vote :Vote): Observable<Colleague> {
    return this.http.post<Colleague>("https://dev.cleverapps.io/api/v2/votes", { "like_hate": vote.vote, "pseudo": vote.colleague.pseudo})
  }

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

