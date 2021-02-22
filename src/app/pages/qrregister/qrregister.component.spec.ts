import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrregisterComponent } from './qrregister.component';

describe('QrregisterComponent', () => {
  let component: QrregisterComponent;
  let fixture: ComponentFixture<QrregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
