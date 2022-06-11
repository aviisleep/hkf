import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadopedidoComponent } from './estadopedido.component';

describe('EstadopedidoComponent', () => {
  let component: EstadopedidoComponent;
  let fixture: ComponentFixture<EstadopedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadopedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadopedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
