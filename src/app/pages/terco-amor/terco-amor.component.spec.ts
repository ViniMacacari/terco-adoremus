import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoAmorComponent } from './terco-amor.component';

describe('TercoAmorComponent', () => {
  let component: TercoAmorComponent;
  let fixture: ComponentFixture<TercoAmorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TercoAmorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TercoAmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
