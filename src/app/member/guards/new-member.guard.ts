import { NewMemberComponent } from './../new-member/new-member.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewMemberGuard implements CanDeactivate<NewMemberComponent> {
  canDeactivate(
    component: NewMemberComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return !component.member.dirty || window.confirm('Möchten Sie die nicht gespeicherten Änderungen verwefen');
  }
}
