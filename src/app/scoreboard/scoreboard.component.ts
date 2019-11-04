import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ScoreService } from '../scoreboard/scoreboard.service';


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
 score;
 score1;
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.saveScore(this.score).subscribe( data => {
      console.log(data);
      return this.score = data;
    });


    
  
  }

}
