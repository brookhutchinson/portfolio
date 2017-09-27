import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActorsProjectComponent }           from './actors-project.component';

describe('ActorsProjectComponent', () => {
  let component: ActorsProjectComponent;
  let fixture: ComponentFixture<ActorsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});