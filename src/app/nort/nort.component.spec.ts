import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NortComponent } from './nort.component';

describe('NortComponent', () => {
  let component: NortComponent;
  let fixture: ComponentFixture<NortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
