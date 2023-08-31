import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaMenuComponent } from './nba-menu.component';

describe('NbaMenuComponent', () => {
  let component: NbaMenuComponent;
  let fixture: ComponentFixture<NbaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
