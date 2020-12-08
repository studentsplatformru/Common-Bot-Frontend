import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbotsortComponent } from './searchbotsort.component';

describe('SearchbotsortComponent', () => {
  let component: SearchbotsortComponent;
  let fixture: ComponentFixture<SearchbotsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbotsortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbotsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
