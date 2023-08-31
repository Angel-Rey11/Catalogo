import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFutbolRetroComponent } from './menu-futbol-retro.component';

describe('MenuFutbolRetroComponent', () => {
  let component: MenuFutbolRetroComponent;
  let fixture: ComponentFixture<MenuFutbolRetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFutbolRetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFutbolRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
