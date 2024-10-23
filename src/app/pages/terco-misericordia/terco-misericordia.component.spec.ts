import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoMisericordiaComponent } from './terco-misericordia.component';

describe('TercoMisericordiaComponent', () => {
  let component: TercoMisericordiaComponent;
  let fixture: ComponentFixture<TercoMisericordiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TercoMisericordiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TercoMisericordiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
