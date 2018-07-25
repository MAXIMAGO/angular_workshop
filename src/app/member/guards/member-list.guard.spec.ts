import { TestBed, async, inject } from '@angular/core/testing';

import { MemberListGuard } from './member-list.guard';

describe('MemberListGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberListGuard]
    });
  });

  it('should ...', inject([MemberListGuard], (guard: MemberListGuard) => {
    expect(guard).toBeTruthy();
  }));
});
