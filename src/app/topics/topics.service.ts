import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TopicsService{
    apiURL = 'http://localhost:8080/topics';

    constructor(private _http: HttpClient){ }

    


}