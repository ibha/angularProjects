import { TestBed } from '@angular/core/testing';

import { UserServiceConfigService } from './user-service-config.service';

describe('UserServiceConfigService', () => {
  let service: UserServiceConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
