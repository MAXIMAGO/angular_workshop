import { IMember } from './../../models/member.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private _http: HttpClient) {}

  public getMembers(): Observable<IMember[]> {
    return this._http.get<IMember[]>(environment.api.members.get)
      .pipe(catchError(this.handleError('getMembers', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`, error);
      return of(result as T);
    };
  }
}


