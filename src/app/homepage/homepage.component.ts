import { Component, OnInit } from '@angular/core';
// import { DataService } from '../homepage/homepage.service';
import {homepage } from '../homepage/homepage.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // users;
  // constructor(private apiservice: DataService) { }

  ngOnInit() {
    
    // this.apiservice.getUsers().subscribe((data)=>{
    //   console.log(data);
    //   this.users = data;

//      });
  }
  

}
