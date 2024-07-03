import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMeusPedidosComponent } from './tela-meus-pedidos.component';

describe('TelaMeusPedidosComponent', () => {
  let component: TelaMeusPedidosComponent;
  let fixture: ComponentFixture<TelaMeusPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaMeusPedidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaMeusPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
