import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomFilterComponent } from './bathroom-filter.component';

describe('BathroomFilterComponent', () => {
  let component: BathroomFilterComponent;
  let fixture: ComponentFixture<BathroomFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathroomFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathroomFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
