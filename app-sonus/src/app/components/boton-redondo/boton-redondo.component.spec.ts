import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRedondoComponent } from './boton-redondo.component';

describe('BotonRedondoComponent', () => {
  let component: BotonRedondoComponent;
  let fixture: ComponentFixture<BotonRedondoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonRedondoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonRedondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
