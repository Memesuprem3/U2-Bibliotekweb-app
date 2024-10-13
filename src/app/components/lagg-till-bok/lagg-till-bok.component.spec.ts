import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaggTillBokComponent } from './lagg-till-bok.component';

describe('LaggTillBokComponent', () => {
  let component: LaggTillBokComponent;
  let fixture: ComponentFixture<LaggTillBokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaggTillBokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaggTillBokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
