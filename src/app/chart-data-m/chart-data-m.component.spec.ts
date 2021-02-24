import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDataMComponent } from './chart-data-m.component';

describe('ChartDataMComponent', () => {
  let component: ChartDataMComponent;
  let fixture: ComponentFixture<ChartDataMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDataMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDataMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
