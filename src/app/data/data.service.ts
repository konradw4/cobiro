import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { dataConfig } from './data.config';
import { Attributes } from './model/attributes';
import { ResponseData } from './model/response-data';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    public getAttributes = (): Observable<Attributes> => {
        return this.http.get(dataConfig.apiUrl).pipe(
            catchError(this.handleError),
            map((element: ResponseData) => element.data[0].attributes)
        );
    };

    private handleError = (error: HttpErrorResponse) => {
        if (error) {
            console.error(`Error occured! Message: ${error.message}`);
        }
        return throwError(error);
    };
}
