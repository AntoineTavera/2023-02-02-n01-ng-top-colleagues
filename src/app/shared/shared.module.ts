import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { CounterComponent } from './components/counter/counter.component';
import {HttpClientModule} from "@angular/common/http";
import { ScorePipe } from './pipes/score.pipe';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { CreateColleagueReactiveFormsComponent } from './components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    CounterComponent,
    ScorePipe,
    VotingHistoryComponent,
    CreateColleagueReactiveFormsComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent,
        CounterComponent,
        HttpClientModule
    ]
})
export class SharedModule {



}
