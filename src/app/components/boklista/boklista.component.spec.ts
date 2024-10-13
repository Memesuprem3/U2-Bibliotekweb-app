import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoklistaComponent } from './boklista.component';

describe('BoklistaComponent', () => {
  let component: BoklistaComponent;
  let fixture: ComponentFixture<BoklistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoklistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoklistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
