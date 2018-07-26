import { environment } from '../../../../environments/environment';
import { IMember } from '../../models/member.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private _nextId = 4;

  constructor(private _http: HttpClient) {}

  public getMembers(): Observable<IMember[]> {
    return this._http.get<IMember[]>(environment.api.members.get).pipe(catchError(this.handleError('getMembers', [])));
  }

  public createMember(data: IMember): Observable<IMember> {
    data.id = this.getId();
    return this._http.put<IMember>(`${environment.api.members.put}/${data.id}`, data);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`, error);
      return of(result as T);
    };
  }

  private getId(): string {
    return (this._nextId++).toString();
  }
}
