import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosarioComponent } from './rosario.component';

describe('RosarioComponent', () => {
  let component: RosarioComponent;
  let fixture: ComponentFixture<RosarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RosarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RosarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
