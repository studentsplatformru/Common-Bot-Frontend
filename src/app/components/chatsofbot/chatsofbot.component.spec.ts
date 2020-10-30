import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsofbotComponent } from './chatsofbot.component';

describe('ChatsofbotComponent', () => {
  let component: ChatsofbotComponent;
  let fixture: ComponentFixture<ChatsofbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsofbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsofbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
