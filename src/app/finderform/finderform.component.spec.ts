import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderformComponent } from './finderform.component';

describe('FinderformComponent', () => {
  let component: FinderformComponent;
  let fixture: ComponentFixture<FinderformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinderformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
