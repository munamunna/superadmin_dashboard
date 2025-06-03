import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlilstComponent } from './productlilst.component';

describe('ProductlilstComponent', () => {
  let component: ProductlilstComponent;
  let fixture: ComponentFixture<ProductlilstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductlilstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlilstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
