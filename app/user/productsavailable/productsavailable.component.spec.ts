import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsavailableComponent } from './productsavailable.component';

describe('ProductsavailableComponent', () => {
  let component: ProductsavailableComponent;
  let fixture: ComponentFixture<ProductsavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsavailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
