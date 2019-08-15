import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMicrofonosComponent } from './lista-microfonos.component';

describe('ListaMicrofonosComponent', () => {
  let component: ListaMicrofonosComponent;
  let fixture: ComponentFixture<ListaMicrofonosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMicrofonosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMicrofonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
