import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCollectionsComponent } from './community-collections.component';

describe('CommunityCollectionsComponent', () => {
  let component: CommunityCollectionsComponent;
  let fixture: ComponentFixture<CommunityCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
