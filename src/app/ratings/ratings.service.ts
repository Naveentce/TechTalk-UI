import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ratingss } from './ratings.model';

@Injectable({
    providedIn: 'root'
})
export class RatingsService {

    apuURL = 'http://localhost:8080/ratings';
    apiURL = 'http://localhost:8080/topics';

    constructor(private _http: HttpClient){ }

    savefeedback(ratings: any) : Observable<any>{

        return this._http.post(this.apuURL, ratings);

    }
    getTopics(){
        return  this._http.get<ratingss[]>(this.apiURL);
    }

}
