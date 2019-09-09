import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Employee} from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users$: Employee[];
  data : any;

  constructor(private dataservice: DataService) {}

  ngOnInit() {
    return this.dataservice.getUsers()
      .subscribe(data => {
		  this.users$ = this.data
	  });

  } 
  
}
