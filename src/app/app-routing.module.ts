import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomepageComponent},
    { path: 'meet', component: MeetTheTeamComponent},
    { path: 'team1', component: Team1Component},
    { path: 'team2', component: Team2Component}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}


