import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaContraseñaComponent } from './nueva-contraseña.component';

describe('NuevaContraseñaComponent', () => {
  let component: NuevaContraseñaComponent;
  let fixture: ComponentFixture<NuevaContraseñaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaContraseñaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaContraseñaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
