import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideadminbarComponent } from './sideadminbar.component';

describe('SideadminbarComponent', () => {
  let component: SideadminbarComponent;
  let fixture: ComponentFixture<SideadminbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideadminbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideadminbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
