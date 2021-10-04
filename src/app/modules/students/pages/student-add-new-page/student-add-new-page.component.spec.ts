import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StudentAddNewPageComponent } from './student-add-new-page.component';

describe('StudentAddNewPageComponent', () => {
  let component: StudentAddNewPageComponent;
  let fixture: ComponentFixture<StudentAddNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAddNewPageComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
