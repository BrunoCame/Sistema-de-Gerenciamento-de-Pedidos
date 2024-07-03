import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAddClienteComponent } from './tela-add-cliente.component';

describe('TelaAddClienteComponent', () => {
  let component: TelaAddClienteComponent;
  let fixture: ComponentFixture<TelaAddClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaAddClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAddClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
