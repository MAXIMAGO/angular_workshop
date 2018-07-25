import { MemberService } from './../services/member/member.service';
import { ActivatedRoute } from '@angular/router';
import { IMember } from './../models/member.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'th-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  public member: IMember;

  constructor(private activatedRoute: ActivatedRoute, private memberService: MemberService) {}

  ngOnInit() {
    const memberId = this.activatedRoute.snapshot.params['id'];
    this.memberService.getMembers().subscribe(members => {
      this.member = members.find(member => member.id === memberId);
    });
  }

  public save(form: FormGroup) {
    console.log(form.value);
    // save on api
    // ...
    // on save success
    form.reset(form.value);

  }
}
