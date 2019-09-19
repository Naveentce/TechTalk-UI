import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ScoreService } from '../scoreboard/scoreboard.service';


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
 empname: String = '' ;
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    
  
  }
  save(){
    console.log(this.empname);
    this.scoreService.saveEmployee(this.empname).subscribe( data => {
      console.log(data);
    });
  }

}
