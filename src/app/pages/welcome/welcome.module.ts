import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePage } from './welcome.page';
import {SharedModule} from "../../shared/shared.module";
import {AppModule} from "../../app.module";



@NgModule({
  declarations: [
    WelcomePage
  ],
  exports: [
    WelcomePage
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class WelcomeModule { }
