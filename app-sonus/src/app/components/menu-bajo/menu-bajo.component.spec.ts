import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBajoComponent } from './menu-bajo.component';

describe('MenuBajoComponent', () => {
  let component: MenuBajoComponent;
  let fixture: ComponentFixture<MenuBajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
