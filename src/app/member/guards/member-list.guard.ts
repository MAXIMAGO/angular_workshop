import { MemberListComponent } from './../member-list/member-list.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberListGuard implements CanActivate, CanDeactivate<MemberListComponent> {
  canDeactivate(
    component: MemberListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const members = component.members.map(member => member.firstname).join(', ');
    return window.confirm(`Wollen Sie ${members} wirklich verlassen?`);
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
