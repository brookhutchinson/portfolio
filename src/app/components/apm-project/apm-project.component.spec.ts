// modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// components
import { ApmProjectComponent } from './apm-project.component';

describe('ApmProjectComponent', () => {
  let component: ApmProjectComponent;
  let fixture: ComponentFixture<ApmProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApmProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApmProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ApmProjectComponent', () => {
    expect(component).toBeTruthy();
  });
});
