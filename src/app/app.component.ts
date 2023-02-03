import { Component } from '@angular/core';
import {Colleague} from "./models/colleague";

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';

  colleague1: Colleague = {
    pseudo: "Naufragé",
    score: 100,
    photo: "http://randomuser.me/api/portraits/men/81.jpg"
  }

  colleague2: Colleague = {
    pseudo: "Galerien",
    score: 100,
    photo: "http://randomuser.me/api/portraits/men/83.jpg"
  }

  colleague3: Colleague = {
    pseudo: "Rescapé",
    score: 100,
    photo: "http://randomuser.me/api/portraits/men/89.jpg"
  }
}
