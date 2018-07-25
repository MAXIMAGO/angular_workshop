import { MemberComponent } from './member/member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const routes: Routes = [
  {
    path: 'members',
    component: MemberComponent,
    children: [
      {
        path: '',
        component: MemberListComponent
      },
      {
        path: ':id',
        component: MemberDetailsComponent
      }
    ]
  }
];

export const memberRouting = [RouterModule, RouterModule.forChild(routes)];
