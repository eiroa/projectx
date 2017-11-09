import { NgModule } from '@angular/core';
import {  } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TechnologiesComponent} from '../components/technologies.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {TechDetailComponent} from '../components/tech-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'techs', component: TechnologiesComponent},
  { path: 'detail/:id', component: TechDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})

export class RoutingModule {
}
