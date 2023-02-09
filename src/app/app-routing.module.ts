import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePage} from "./pages/welcome/welcome.page";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague.page";
import {CollegueDetaillePage} from "./pages/collegue-detaille/collegue-detaille.page";

const URL = "https://dev.cleverapps.io/api/v2/colleagues"
const routes: Routes = [
  {path: 'colleague/:pseudo', component:CollegueDetaillePage },
  {path: 'colleague', component: WelcomePage},
  {path: 'form-template', component: CreateColleaguePage},
  {path: '', pathMatch: 'full', redirectTo: '/colleague'},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
