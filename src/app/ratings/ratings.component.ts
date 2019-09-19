import { Component, OnInit } from '@angular/core';
import { Ratings } from './ratings';
import { RatingsService } from '../ratings/ratings.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  rating: Ratings[]=[];

  value1: string = '';
  value2: string = '';
  value3: string = '';
  value4: string = '';
  value5: string = '';
  value6: string = '';
  constructor(private ratingsservice: RatingsService) { }

  ngOnInit() {
  }
  save(){
    this.rating[0] = new Ratings(this.value1, this.value2, this.value3, this.value4, this.value5, this.value6);

    this.ratingsservice.savefeedback(this.rating).subscribe( data => {
      console.log(data);
    });
    
  }

}
