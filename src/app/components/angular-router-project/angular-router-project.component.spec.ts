import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularRouterProjectComponent }    from './angular-router-project.component';

describe('AngularRouterProjectComponent', () => {
  let component: AngularRouterProjectComponent;
  let fixture: ComponentFixture<AngularRouterProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRouterProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRouterProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});