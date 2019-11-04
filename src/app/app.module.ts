import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeadermenuComponent } from './headermenu/headermenu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RulesComponent } from './rules/rules.component';
import { TopicsComponent } from './topics/topics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadermenuComponent,
    HomepageComponent,
    FooterComponent,
    MeetTheTeamComponent,
    Team1Component,
    Team2Component,
    ScoreboardComponent,
    RatingsComponent,
    RulesComponent,
    TopicsComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AgGridModule.withComponents(null)
  ],
  providers: [],
  // providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
