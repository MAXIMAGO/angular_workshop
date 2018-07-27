import { Component, OnInit } from '@angular/core';
import { fromEvent } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'th-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.css']
})
export class AsyncpipeComponent implements OnInit {
  public onClick = fromEvent(document, 'click').pipe(map((e: MouseEvent) => `Klick {x:${e.x}, y:${e.y}}`));

  constructor() {}

  ngOnInit() {}
}
