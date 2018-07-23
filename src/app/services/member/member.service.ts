import { IMember } from './../../models/member.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private _members: IMember[] = [
    { firstname: 'Kingsley', name: 'Owusu-Sekyere' },
    { firstname: 'Matthias', name: 'Blex' },
    { firstname: 'Martin', name: 'Kaniut' }
  ];

  constructor() {}

  public getMembers(): IMember[] {
    return this._members;
  }
}
