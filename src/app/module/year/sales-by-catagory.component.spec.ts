import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCatagoryComponent } from './sales-by-catagory.component';

describe('SalesByCatagoryComponent', () => {
  let component: SalesByCatagoryComponent;
  let fixture: ComponentFixture<SalesByCatagoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesByCatagoryComponent]
    });
    fixture = TestBed.createComponent(SalesByCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
