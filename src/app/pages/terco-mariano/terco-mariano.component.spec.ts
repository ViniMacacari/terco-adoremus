import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoMarianoComponent } from './terco-mariano.component';

describe('TercoMarianoComponent', () => {
  let component: TercoMarianoComponent;
  let fixture: ComponentFixture<TercoMarianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TercoMarianoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TercoMarianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
