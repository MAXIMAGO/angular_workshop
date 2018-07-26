import { MemberService } from '../services/member/member.service';
import { IMember } from '../models/member.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'th-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  public members: IMember[];
  constructor(private _memberService: MemberService, private _router: Router, private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._memberService.getMembers().subscribe(members => (this.members = members));
  }

  public showMember(member: IMember) {
    this._router.navigate([member.id], { relativeTo: this._activatedRoute });
  }

  public editMember(member: IMember) {
    this._router.navigate(['edit', member.id], { relativeTo: this._activatedRoute });
  }

  public newMember() {
    this._router.navigate(['new'], { relativeTo: this._activatedRoute });
  }
}
