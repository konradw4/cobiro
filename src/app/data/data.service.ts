import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Attributes } from './model/attributes';
import { ResponseData } from './model/response-data';
import { Section } from './model/section';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    public getAttributes = (id: string): Observable<Attributes> => {
        return this.http.get(environment.apiUrl).pipe(
            catchError(this.handleError),
            map((resData: ResponseData) => {
                const sectionData = resData.data.find((section: Section) => section.id === id);
                if (sectionData) {
                    return sectionData.attributes;
                }
            })
        );
    };

    private handleError = (error: HttpErrorResponse) => {
        if (error) {
            console.error(`Error occured! Message: ${error.message}`);
        }
        return throwError(error);
    };
}
