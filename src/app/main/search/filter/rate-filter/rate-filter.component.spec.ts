import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateFilterComponent } from './rate-filter.component';

describe('RateFilterComponent', () => {
  let component: RateFilterComponent;
  let fixture: ComponentFixture<RateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
