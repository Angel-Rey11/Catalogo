import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuderiasmotoMenuComponent } from './escuderiasmoto-menu.component';

describe('EscuderiasmotoMenuComponent', () => {
  let component: EscuderiasmotoMenuComponent;
  let fixture: ComponentFixture<EscuderiasmotoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscuderiasmotoMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscuderiasmotoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
