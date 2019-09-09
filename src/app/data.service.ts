import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    apuURL = 'http://localhost:8080/getUsers';

    constructor(private _http: HttpClient){ }

    getUsers(){
        

        return  this._http.get<Employee[]>(this.apuURL);

    }
}
