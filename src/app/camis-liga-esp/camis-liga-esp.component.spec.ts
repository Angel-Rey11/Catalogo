import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisLigaEspComponent } from './camis-liga-esp.component';

describe('CamisLigaEspComponent', () => {
  let component: CamisLigaEspComponent;
  let fixture: ComponentFixture<CamisLigaEspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisLigaEspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisLigaEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
