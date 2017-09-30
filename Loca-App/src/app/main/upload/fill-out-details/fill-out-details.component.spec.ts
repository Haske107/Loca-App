import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillOutDetailsComponent } from './fill-out-details.component';

describe('FillOutDetailsComponent', () => {
  let component: FillOutDetailsComponent;
  let fixture: ComponentFixture<FillOutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillOutDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillOutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
