import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorUrlComponent } from './por-url.component';

describe('PorUrlComponent', () => {
  let component: PorUrlComponent;
  let fixture: ComponentFixture<PorUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorUrlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
