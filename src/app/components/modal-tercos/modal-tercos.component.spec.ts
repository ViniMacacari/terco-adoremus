import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTercosComponent } from './modal-tercos.component';

describe('ModalTercosComponent', () => {
  let component: ModalTercosComponent;
  let fixture: ComponentFixture<ModalTercosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTercosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalTercosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
