import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { meettheteam } from './meettheteam.model';



@Injectable({
    providedIn: 'root'
})
export class DataService {

    apuURL = 'http://localhost:8080/getUsers';

    constructor(private _http: HttpClient){ }

    getUsers(){
        

        return  this._http.get<meettheteam[]>(this.apuURL);

    }
}
