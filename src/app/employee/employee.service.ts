﻿import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EmployeeService {

    constructor(private _http: Http) {

    }

    getEmployees(): Observable<IEmployee[]>  {
        return this._http.get("http://localhost:56658/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }

    getEmployeeByID(ID: string): Observable<IEmployee> {
        return this._http.get("http://localhost:56658/api/employees/" + ID)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}