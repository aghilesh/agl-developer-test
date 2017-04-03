import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import {PETS} from './mock.pet';

@Injectable()

export class PetService {

    private petsAPIUrl = `http://agl-developer-test.azurewebsites.net/people.json`;
    constructor(private http: Http){}
    getPets(){
        return this.http.get(this.petsAPIUrl).map(this.extractData);
        //return PETS; // Enable ths line for unit testing by commenting above line
    }

    private extractData(res: Response){
        let jsonData = res.json();
        return jsonData || [];
    }
};