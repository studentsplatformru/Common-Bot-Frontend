import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbotsComponent } from './searchbots.component';

describe('SearchbotsComponent', () => {
  let component: SearchbotsComponent;
  let fixture: ComponentFixture<SearchbotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
