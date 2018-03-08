import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardnavComponent } from './cardnav.component';

describe('CardnavComponent', () => {
  let component: CardnavComponent;
  let fixture: ComponentFixture<CardnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
