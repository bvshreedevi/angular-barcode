import { TestBed } from '@angular/core/testing';

import { VoucherQuantityService } from './voucher-quantity.service';

describe('VoucherQuantityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoucherQuantityService = TestBed.get(VoucherQuantityService);
    expect(service).toBeTruthy();
  });
});
