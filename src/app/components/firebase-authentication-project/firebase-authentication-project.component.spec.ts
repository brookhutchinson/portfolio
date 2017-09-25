import { async, ComponentFixture, TestBed }       from '@angular/core/testing';
import { FirebaseAuthenticationProjectComponent } from './firebase-authentication-project.component';

describe('FirebaseAuthenticationProjectComponent', () => {
  let component: FirebaseAuthenticationProjectComponent;
  let fixture: ComponentFixture<FirebaseAuthenticationProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseAuthenticationProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseAuthenticationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});