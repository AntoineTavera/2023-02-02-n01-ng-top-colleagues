import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
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
  constructor() { }
}
