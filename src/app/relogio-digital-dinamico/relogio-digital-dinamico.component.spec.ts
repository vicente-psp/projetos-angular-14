import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelogioDigitalDinamicoComponent } from './relogio-digital-dinamico.component';

describe('RelogioDigitalDinamicoComponent', () => {
  let component: RelogioDigitalDinamicoComponent;
  let fixture: ComponentFixture<RelogioDigitalDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelogioDigitalDinamicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelogioDigitalDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
