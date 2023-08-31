import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaMenuComponent } from './formula-menu.component';

describe('FormulaMenuComponent', () => {
  let component: FormulaMenuComponent;
  let fixture: ComponentFixture<FormulaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
