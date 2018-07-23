import { IMember } from './../models/member.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'th-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  public members: IMember[] = [
    { firstname: 'Kingsley', name: 'Owusu-Sekyere' },
    { firstname: 'Matthias', name: 'Blex' },
    { firstname: 'Martin', name: 'Kaniut' }
  ];

  constructor() {}

  ngOnInit() {}

  public showMember(member: IMember) {
    console.log(member);
  }
}
