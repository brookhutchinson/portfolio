import { async, ComponentFixture, TestBed }  from '@angular/core/testing';
import { SignInLandingPageProjectComponent } from './sign-in-landing-page-project.component';

describe('SignInLandingPageProjectComponent', () => {
  let component: SignInLandingPageProjectComponent;
  let fixture: ComponentFixture<SignInLandingPageProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInLandingPageProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInLandingPageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});