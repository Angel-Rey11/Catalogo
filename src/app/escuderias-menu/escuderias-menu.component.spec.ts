import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuderiasMenuComponent } from './escuderias-menu.component';

describe('EscuderiasMenuComponent', () => {
  let component: EscuderiasMenuComponent;
  let fixture: ComponentFixture<EscuderiasMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscuderiasMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscuderiasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
