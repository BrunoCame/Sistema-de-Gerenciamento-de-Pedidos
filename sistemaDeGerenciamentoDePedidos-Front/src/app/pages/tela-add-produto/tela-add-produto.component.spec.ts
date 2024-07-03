import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAddProdutoComponent } from './tela-add-produto.component';

describe('TelaAddProdutoComponent', () => {
  let component: TelaAddProdutoComponent;
  let fixture: ComponentFixture<TelaAddProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaAddProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAddProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
