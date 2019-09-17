import { Component, OnInit } from '@angular/core';
import {DataService} from './meet-the-team.service';
@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.css']
})
export class MeetTheTeamComponent implements OnInit {
  users;
  constructor(private apiservice: DataService) { }

  ngOnInit() {
    
    this.apiservice.getUsers().subscribe((data)=>{
      console.log(data);
      this.users = data;

    });
  }

}
