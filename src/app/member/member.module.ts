import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberBoxComponent } from './member-box/member-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MemberBoxComponent,
    MemberListComponent,
    MemberDetailsComponent,
    MemberComponent
  ]
})
export class MemberModule { }
