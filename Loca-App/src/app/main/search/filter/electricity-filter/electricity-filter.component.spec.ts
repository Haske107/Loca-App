import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityFilterComponent } from './electricity-filter.component';

describe('ElectricityFilterComponent', () => {
  let component: ElectricityFilterComponent;
  let fixture: ComponentFixture<ElectricityFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
