import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeNewComponent } from './prize-new.component';

describe('PrizeNewComponent', () => {
  let component: PrizeNewComponent;
  let fixture: ComponentFixture<PrizeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
