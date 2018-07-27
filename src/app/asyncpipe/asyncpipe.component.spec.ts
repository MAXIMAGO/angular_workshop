import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncpipeComponent } from './asyncpipe.component';

describe('AsyncpipeComponent', () => {
  let component: AsyncpipeComponent;
  let fixture: ComponentFixture<AsyncpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
