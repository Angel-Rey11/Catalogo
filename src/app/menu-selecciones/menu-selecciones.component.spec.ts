import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSeleccionesComponent } from './menu-selecciones.component';

describe('MenuSeleccionesComponent', () => {
  let component: MenuSeleccionesComponent;
  let fixture: ComponentFixture<MenuSeleccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSeleccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSeleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
