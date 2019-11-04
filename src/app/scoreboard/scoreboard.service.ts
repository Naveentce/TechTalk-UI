import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Score } from './scoreboard.model';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {

    apuURL = 'http://localhost:8080/score';

    constructor(private _http: HttpClient){ }

    saveScore(score: any) : Observable<any>{

        return this._http.get<Score[]>(this.apuURL);
        

    }

}

  