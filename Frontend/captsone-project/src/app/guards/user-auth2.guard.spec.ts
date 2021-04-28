import { TestBed } from '@angular/core/testing';

import { UserAuth2Guard } from './user-auth2.guard';

describe('UserAuth2Guard', () => {
  let guard: UserAuth2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAuth2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
