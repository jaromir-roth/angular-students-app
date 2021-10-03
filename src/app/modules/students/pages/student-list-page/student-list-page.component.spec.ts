import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { StudentListPageComponent } from './student-list-page.component';

import StudentsFacade from '../../students.facade';
import IStudent from '../../models/student.model';

@Injectable()
class StudentsFacadeStub {
  public getList(): Observable<IStudent[]> {
    return of([]);
  }
}

describe('StudentListPageComponent', () => {
  let component: StudentListPageComponent;
  let fixture: ComponentFixture<StudentListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentListPageComponent],
      providers: [{ provide: StudentsFacade, useClass: StudentsFacadeStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
