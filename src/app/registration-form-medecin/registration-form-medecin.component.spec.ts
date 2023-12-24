import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormMedecinComponent } from './registration-form-medecin.component';

describe('RegistrationFormMedecinComponent', () => {
  let component: RegistrationFormMedecinComponent;
  let fixture: ComponentFixture<RegistrationFormMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
