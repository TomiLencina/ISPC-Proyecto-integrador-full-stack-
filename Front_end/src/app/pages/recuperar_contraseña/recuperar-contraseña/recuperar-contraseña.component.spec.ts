import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseñaComponent } from './recuperar-contraseña.component';

describe('RecuperarContraseñaComponent', () => {
  let component: RecuperarContraseñaComponent;
  let fixture: ComponentFixture<RecuperarContraseñaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarContraseñaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarContraseñaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
