import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'th-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.css']
})
export class AsyncpipeComponent implements OnInit {
  public onClick: Observable<string> = fromEvent(document, 'click').pipe(map((e: MouseEvent) => `Klick {x:${e.x}, y:${e.y}}`));
  public count = 0;

  constructor() {}

  ngOnInit() {
    this.onClick.subscribe(() => this.count++);
  }
}
