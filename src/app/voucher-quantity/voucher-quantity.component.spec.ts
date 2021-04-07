import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherQuantityComponent } from './voucher-quantity.component';

describe('VoucherQuantityComponent', () => {
  let component: VoucherQuantityComponent;
  let fixture: ComponentFixture<VoucherQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
