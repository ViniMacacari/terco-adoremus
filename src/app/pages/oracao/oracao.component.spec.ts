import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracaoComponent } from './oracao.component';

describe('OracaoComponent', () => {
  let component: OracaoComponent;
  let fixture: ComponentFixture<OracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OracaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
