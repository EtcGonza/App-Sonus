import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMicrofonosComponent } from './menu-microfonos.component';

describe('MenuMicrofonosComponent', () => {
  let component: MenuMicrofonosComponent;
  let fixture: ComponentFixture<MenuMicrofonosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMicrofonosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMicrofonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
