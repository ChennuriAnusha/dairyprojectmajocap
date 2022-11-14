import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivorderComponent } from './indivorder.component';

describe('IndivorderComponent', () => {
  let component: IndivorderComponent;
  let fixture: ComponentFixture<IndivorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndivorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
