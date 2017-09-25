import { async, ComponentFixture, TestBed }           from '@angular/core/testing';
import { AngularTemplateDrivenFormsProjectComponent } from './angular-template-driven-forms-project.component';

describe('AngularTemplateDrivenFormsProjectComponent', () => {
  let component: AngularTemplateDrivenFormsProjectComponent;
  let fixture: ComponentFixture<AngularTemplateDrivenFormsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTemplateDrivenFormsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTemplateDrivenFormsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});