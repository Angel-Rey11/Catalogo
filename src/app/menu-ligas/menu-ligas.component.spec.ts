import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLigasComponent } from './menu-ligas.component';

describe('MenuLigasComponent', () => {
  let component: MenuLigasComponent;
  let fixture: ComponentFixture<MenuLigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLigasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
