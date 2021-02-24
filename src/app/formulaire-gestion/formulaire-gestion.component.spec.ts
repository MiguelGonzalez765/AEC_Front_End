 import { ComponentFixture, TestBed } from '@angular/core/testing';

 import { FormulaireGestionComponent } from './formulaire-gestion.component';

 describe('FormulaireGestionComponent', () => {
  let component: FormulaireGestionComponent;
   let fixture: ComponentFixture<FormulaireGestionComponent>;

   beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireGestionComponent);
     component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
   });
 });
