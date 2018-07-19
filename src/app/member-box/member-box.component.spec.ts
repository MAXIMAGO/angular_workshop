import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberBoxComponent } from './member-box.component';

describe('MemberBoxComponent', () => {
  let component: MemberBoxComponent;
  let fixture: ComponentFixture<MemberBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
