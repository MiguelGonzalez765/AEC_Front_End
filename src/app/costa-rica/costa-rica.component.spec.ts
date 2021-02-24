import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostaRicaComponent } from './costa-rica.component';

describe('CostaRicaComponent', () => {
  let component: CostaRicaComponent;
  let fixture: ComponentFixture<CostaRicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostaRicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostaRicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
