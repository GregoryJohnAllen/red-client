import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderProfileComponent } from './finder-profile.component';

describe('FinderProfileComponent', () => {
  let component: FinderProfileComponent;
  let fixture: ComponentFixture<FinderProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinderProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
