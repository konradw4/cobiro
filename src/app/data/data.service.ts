import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';

import { dataConfig } from './data.config';
import { Attributes } from './model/attributes';
import { ResponseData } from './model/response-data';
import { Section } from './model/section';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    public getAttributes = (id: string): Observable<Attributes> => {
        return this.http.get(dataConfig.apiUrl).pipe(
            catchError(this.handleError),
            map((resData: ResponseData) => {
                const sectionData = resData.data.find((section: Section) => section.id === id);
                if (sectionData) {
                    return sectionData.attributes;
                }
            }),
            first()
        );
    };

    private handleError = (error: HttpErrorResponse) => {
        if (error) {
            console.error(`Error occured! Message: ${error.message}`);
        }
        return throwError(error);
    };
}
