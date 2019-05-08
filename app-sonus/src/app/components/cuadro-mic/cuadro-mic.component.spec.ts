import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroMicComponent } from './cuadro-mic.component';

describe('CuadroMicComponent', () => {
  let component: CuadroMicComponent;
  let fixture: ComponentFixture<CuadroMicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadroMicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroMicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
