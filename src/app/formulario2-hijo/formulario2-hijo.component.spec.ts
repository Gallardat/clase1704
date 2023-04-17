import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario2HijoComponent } from './formulario2-hijo.component';

describe('Formulario2HijoComponent', () => {
  let component: Formulario2HijoComponent;
  let fixture: ComponentFixture<Formulario2HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario2HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario2HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
