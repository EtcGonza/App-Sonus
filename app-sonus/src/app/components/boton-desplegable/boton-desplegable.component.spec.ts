import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDesplegableComponent } from './boton-desplegable.component';

describe('BotonDesplegableComponent', () => {
  let component: BotonDesplegableComponent;
  let fixture: ComponentFixture<BotonDesplegableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonDesplegableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
