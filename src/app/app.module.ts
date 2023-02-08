import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module'
import { AppComponent } from './app.component';
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        SharedModule,
        CreateColleagueModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
