import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutbolMenuComponent } from './futbol-menu.component';

describe('FutbolMenuComponent', () => {
  let component: FutbolMenuComponent;
  let fixture: ComponentFixture<FutbolMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutbolMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutbolMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
