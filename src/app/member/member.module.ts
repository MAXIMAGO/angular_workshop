import { memberRouting } from './member.routing';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberBoxComponent } from './member-box/member-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member/member.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewMemberComponent } from './new-member/new-member.component';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    memberRouting,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule
  ],
  declarations: [
    MemberBoxComponent,
    MemberListComponent,
    MemberDetailsComponent,
    MemberComponent,
    MemberEditComponent,
    NewMemberComponent,
  ],
})
export class MemberModule { }
