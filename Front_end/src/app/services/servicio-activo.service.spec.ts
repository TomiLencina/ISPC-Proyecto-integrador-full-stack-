import { TestBed } from '@angular/core/testing';

import { ServicioActivoService } from './servicio-activo.service';

describe('ServicioActivoService', () => {
  let service: ServicioActivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioActivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
