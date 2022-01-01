import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path:'', component:LayoutComponent, children:[
    {path:'', component:MainComponent},
    {path:'about', component:AboutComponent},
    {path:':username', component:UserDetailsComponent}
  ]},
  {path:'', redirectTo: "main", pathMatch: "full"},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
