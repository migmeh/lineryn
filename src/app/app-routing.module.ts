import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnoComponent} from "./components/uno/uno.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [

  { path: '', component: UnoComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
