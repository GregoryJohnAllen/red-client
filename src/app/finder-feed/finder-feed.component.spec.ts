import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderFeedComponent } from './finder-feed.component';

describe('FinderFeedComponent', () => {
  let component: FinderFeedComponent;
  let fixture: ComponentFixture<FinderFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinderFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
