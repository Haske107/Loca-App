import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyLocationComponent } from './verify-location.component';

describe('VerifyLocationComponent', () => {
  let component: VerifyLocationComponent;
  let fixture: ComponentFixture<VerifyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
