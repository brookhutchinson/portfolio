import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionsProjectComponent }        from './questions-project.component';

describe('QuestionsProjectComponent', () => {
  let component: QuestionsProjectComponent;
  let fixture: ComponentFixture<QuestionsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});