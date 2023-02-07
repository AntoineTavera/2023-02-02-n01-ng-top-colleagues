import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { CounterComponent } from '../shared/components/counter/counter.component';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent,
        CounterComponent
    ]
})
export class SharedModule {



}
