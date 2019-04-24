import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionMicComponent } from './presentacion-mic.component';

describe('PresentacionMicComponent', () => {
  let component: PresentacionMicComponent;
  let fixture: ComponentFixture<PresentacionMicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionMicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionMicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
