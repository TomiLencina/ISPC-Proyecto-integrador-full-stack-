import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDeInversionesComponent } from './noticias-de-inversiones.component';

describe('NoticiasDeInversionesComponent', () => {
  let component: NoticiasDeInversionesComponent;
  let fixture: ComponentFixture<NoticiasDeInversionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasDeInversionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasDeInversionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
