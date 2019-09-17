import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// import { DataService } from './data.service';
import { HeadermenuComponent } from './headermenu/headermenu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadermenuComponent,
    HomepageComponent,
    FooterComponent,
    MeetTheTeamComponent,
    Team1Component,
    Team2Component,
    ScoreboardComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  // providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
