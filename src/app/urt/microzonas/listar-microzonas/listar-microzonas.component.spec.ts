import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMicrozonasComponent } from './listar-microzonas.component';

describe('ListarMicrozonasComponent', () => {
  let component: ListarMicrozonasComponent;
  let fixture: ComponentFixture<ListarMicrozonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMicrozonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMicrozonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
