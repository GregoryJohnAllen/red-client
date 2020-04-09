import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerformComponent } from './seekerform.component';

describe('SeekerformComponent', () => {
  let component: SeekerformComponent;
  let fixture: ComponentFixture<SeekerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
