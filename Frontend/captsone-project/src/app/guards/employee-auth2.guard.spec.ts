import { TestBed } from '@angular/core/testing';

import { EmployeeAuth2Guard } from './employee-auth2.guard';

describe('EmployeeAuth2Guard', () => {
  let guard: EmployeeAuth2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeAuth2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
