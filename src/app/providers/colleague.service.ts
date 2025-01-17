import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {Observable, Subject} from "rxjs";
import {LikeHate} from "../models/like-hate";
import {HttpClient} from "@angular/common/http";
import {Vote} from "../models/vote";
import {CollegueComplet} from "../models/collegue-complet";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  getColleguebyPseudo (pseudo : string) {
    return this.http.get<CollegueComplet>("https://dev.cleverapps.io/api/v2/colleagues/" + pseudo)
  }

  private subjectCompter = new Subject<LikeHate>();

  constructor(private http:HttpClient) {
  }

  rechercherCollegues(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>("https://dev.cleverapps.io/api/v2/colleagues");
  }

  postData(vote :Vote): Observable<Colleague> {
    return this.http.post<Colleague>("https://dev.cleverapps.io/api/v2/votes", { "like_hate": vote.vote, "pseudo": vote.colleague.pseudo})
  }

publierVote (likeHate:LikeHate) {
this.subjectCompter.next(likeHate);
}

observerVote () {
return this.subjectCompter.asObservable();
  }
posterRequeteCollegue(collegueComplet:Partial<CollegueComplet>) {
  return this.http.post<CollegueComplet>("https://dev.cleverapps.io/api/v2/colleagues", collegueComplet)
}
}

