import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module'
import { AppComponent } from './app.component';
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";
import { MenuComponentComponent } from './menu-component/menu-component.component';
import {RouterLink, RouterOutlet, Routes} from "@angular/router";
import {WelcomeModule} from "./pages/welcome/welcome.module";
import { AppRoutingModule } from './app-routing.module';
import {CollegueDetaillePage} from "./pages/collegue-detaille/collegue-detaille.page";



@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    CollegueDetaillePage

  ],
  imports: [
    BrowserModule,
    SharedModule,
    CreateColleagueModule,
    RouterLink,
    WelcomeModule,
    RouterOutlet,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
    MenuComponentComponent
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
