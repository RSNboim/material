import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MyDash2Component } from './my-dash2/my-dash2.component';
import { AppComponent } from './app.component';
import { C4Component } from './comps/c4/c4.component';
import { C1Component } from './comps/c1/c1.component';


const routes: Routes = [
  {
    path: '', component: C4Component,
        children: [
      { path: 'increasing_home', component: C1Component },
      { path: 'pets_albume', component: MyDashComponent },
      { path: 'pests_albume', component: MyDash2Component },
      

    ] },
    { path: '**', component: C4Component }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
