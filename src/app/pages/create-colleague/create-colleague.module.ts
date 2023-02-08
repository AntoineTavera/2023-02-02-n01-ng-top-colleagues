import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './create-colleague.page';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateColleaguePage
  ],
  exports: [
    CreateColleaguePage
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CreateColleagueModule { }
