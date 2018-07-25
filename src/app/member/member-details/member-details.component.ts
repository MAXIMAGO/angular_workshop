import { IMember } from '../models/member.model';
import { MemberService } from '../services/member/member.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'th-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  public member: IMember;

  constructor(private activatedRoute: ActivatedRoute, private memberService: MemberService) {}

  ngOnInit() {
    const memberId = this.activatedRoute.snapshot.params['id'];
    this.memberService.getMembers().subscribe(members => {
      this.member = members.find(member => member.id === memberId);
    });
  }
}
