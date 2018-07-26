import { TestBed, async, inject } from '@angular/core/testing';

import { NewMemberGuard } from './new-member.guard';

describe('NewMemberGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewMemberGuard]
    });
  });

  it('should ...', inject([NewMemberGuard], (guard: NewMemberGuard) => {
    expect(guard).toBeTruthy();
  }));
});
