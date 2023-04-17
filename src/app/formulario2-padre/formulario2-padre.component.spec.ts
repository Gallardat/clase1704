import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario2PadreComponent } from './formulario2-padre.component';

describe('Formulario2PadreComponent', () => {
  let component: Formulario2PadreComponent;
  let fixture: ComponentFixture<Formulario2PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario2PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario2PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
