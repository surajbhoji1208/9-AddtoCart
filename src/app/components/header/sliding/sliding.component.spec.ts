import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingComponent } from './sliding.component';

describe('SlidingComponent', () => {
  let component: SlidingComponent;
  let fixture: ComponentFixture<SlidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
