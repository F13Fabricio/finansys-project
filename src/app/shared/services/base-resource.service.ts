import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs'
import { map, catchError, flatMap } from 'rxjs/operators'
import { BaseResourceModel } from '../models/base-resource.model';


export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;

  constructor(
    protected injector: Injector,
    protected apiPath: string
    ) {
      this.http = injector.get(HttpClient);
    }

  getById(id: number): Observable<T> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get<T>(url).pipe(
      catchError(this.handleError)
    );
  }

  create(resource: T): Observable<T> {
    return this.http.post<T[]>(this.apiPath, resource).pipe(
      catchError(this.handleError)
    );
  }

  update(resource: T): Observable<T> {
    const url = `${this.apiPath}/${resource.id}`;

    return this.http.put<T[]>(url, resource).pipe(
      map(() => resource),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<T> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete<T>(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }


  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiPath).pipe(
      catchError(this.handleError)
    );
  }

  protected handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO =>", error);
    return throwError(error);
  }
}
