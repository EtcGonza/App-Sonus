import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGuitarraComponent } from './menu-guitarra.component';

describe('MenuGuitarraComponent', () => {
  let component: MenuGuitarraComponent;
  let fixture: ComponentFixture<MenuGuitarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGuitarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGuitarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
