import { IMember } from './../models/member.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'th-member-box',
  templateUrl: './member-box.component.html',
  styleUrls: ['./member-box.component.css']
})
export class MemberBoxComponent implements OnInit {
  @Input() public member: IMember;
  public cursor: { x: number, y: number } = { x: 0, y: 0 };

  @Output() public headerClick = new EventEmitter<IMember>();

  constructor() { }

  ngOnInit() {
  }

  public updateCursor(e: MouseEvent) {
    this.cursor = { x: e.x, y: e.y };
  }

  public onHeaderClick(e: MouseEvent) {
    this.headerClick.emit(this.member);
  }

}
