import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberListGuard } from './guards/member-list.guard';
import { MemberComponent } from './member/member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    children: [
      {
        path: '',
        component: MemberListComponent,
        canActivate: [MemberListGuard],
        canDeactivate: [MemberListGuard]
      },
      {
        path: ':id',
        component: MemberDetailsComponent
      },
      {
        path: 'edit/:id',
        component: MemberEditComponent
      }
    ]
  }
];

export const memberRouting = [RouterModule, RouterModule.forChild(routes)];
