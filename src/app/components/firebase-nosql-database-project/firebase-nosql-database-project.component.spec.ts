import { async, ComponentFixture, TestBed }      from '@angular/core/testing';
import { FirebaseNosqlDatabaseProjectComponent } from './firebase-nosql-database-project.component';

describe('FirebaseNosqlDatabaseProjectComponent', () => {
  let component: FirebaseNosqlDatabaseProjectComponent;
  let fixture: ComponentFixture<FirebaseNosqlDatabaseProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseNosqlDatabaseProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseNosqlDatabaseProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});