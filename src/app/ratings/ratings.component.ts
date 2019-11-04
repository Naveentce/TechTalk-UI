import { Component, OnInit } from '@angular/core';
import { Ratings } from './ratings';
import { RatingsService } from '../ratings/ratings.service';
import { from } from 'rxjs';
import { NgbModule} from  '@ng-bootstrap/ng-bootstrap';
import { } from '../ratings/ratings.model';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  users;
  rating: Ratings[]=[];
  
  value1: string = '';
  value2: string = '';
  value3: string = '';
  value4: string = '';
  value5: string = '';
  value6: string = '';
  value7: string = '';
  value8: string = '';
  value9: string = '';
  value10: string = '';
  value11: string = '';
  value12: string = '';
  value13: string = '';
  constructor(private ratingsservice: RatingsService) { }
  
  ngOnInit() {
    this.ratingsservice.getTopics().subscribe((data)=>{
      console.log(data);
      return this.users = data;

    });

  }
  save(){
    
    this.rating[0] = new Ratings(this.value1, this.value2, this.value3, this.value4, this.value5, this.value6, this.value13);
    this.rating[1] = new Ratings(this.value7, this.value8, this.value9, this.value10, this.value11, this.value12, this.value13);

    this.ratingsservice.savefeedback(this.rating).subscribe( data => {
      console.log(data);
    });

   
    
  }

}
