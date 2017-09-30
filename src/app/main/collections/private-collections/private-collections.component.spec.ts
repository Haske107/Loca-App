import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCollectionsComponent } from './private-collections.component';

describe('PrivateCollectionsComponent', () => {
  let component: PrivateCollectionsComponent;
  let fixture: ComponentFixture<PrivateCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
