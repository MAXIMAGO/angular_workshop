import { MemberService } from './../services/member/member.service';
import { IMember } from './../models/member.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'th-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  public members: IMember[];
  constructor(private _memberService: MemberService) {}

  ngOnInit() {
    this.members = this._memberService.getMembers();
  }

  public showMember(member: IMember) {
    console.log(member);
  }
}
