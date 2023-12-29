import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendreRDVComponent } from './prendre-rdv.component';

describe('PrendreRDVComponent', () => {
  let component: PrendreRDVComponent;
  let fixture: ComponentFixture<PrendreRDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrendreRDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendreRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
