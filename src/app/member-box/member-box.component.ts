import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'th-member-box',
  templateUrl: './member-box.component.html',
  styleUrls: ['./member-box.component.css']
})
export class MemberBoxComponent implements OnInit {
  public cursor: { x: number, y: number } = { x: 0, y: 0 };

  constructor() { }

  ngOnInit() {
  }

  updateCursor(e: MouseEvent) {
    this.cursor = { x: e.x, y: e.y };
  }

}
