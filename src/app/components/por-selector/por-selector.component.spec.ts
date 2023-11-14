import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorSelectorComponent } from './por-selector.component';

describe('PorSelectorComponent', () => {
  let component: PorSelectorComponent;
  let fixture: ComponentFixture<PorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
