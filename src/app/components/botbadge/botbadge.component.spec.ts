import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotbadgeComponent } from './botbadge.component';

describe('BotbadgeComponent', () => {
  let component: BotbadgeComponent;
  let fixture: ComponentFixture<BotbadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotbadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotbadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
