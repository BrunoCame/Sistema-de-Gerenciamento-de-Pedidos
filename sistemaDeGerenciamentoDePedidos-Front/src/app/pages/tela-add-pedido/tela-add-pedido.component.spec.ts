import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAddPedidoComponent } from './tela-add-pedido.component';

describe('TelaAddPedidoComponent', () => {
  let component: TelaAddPedidoComponent;
  let fixture: ComponentFixture<TelaAddPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaAddPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAddPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
