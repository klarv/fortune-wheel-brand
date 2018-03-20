import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeEditComponent } from './prize-edit.component';

describe('PrizeEditComponent', () => {
  let component: PrizeEditComponent;
  let fixture: ComponentFixture<PrizeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
