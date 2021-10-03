import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import IStudent from '../../models/student.model';
import StudentsFacade from '../../students.facade';

@Component({
  selector: 'app-student-list-page',
  templateUrl: './student-list-page.component.html',
  styleUrls: ['./student-list-page.component.scss'],
})
export class StudentListPageComponent implements OnInit {
  public students: IStudent[];

  private studentsData: IStudent[];

  constructor(private readonly studentFacade: StudentsFacade) { }

  ngOnInit(): void {
    this.studentFacade.getList().pipe(
      first(),
    ).subscribe((data) => {
      this.studentsData = data;
      this.filterStudents();
    });
  }

  public filterStudents(searchTerm?: string): void {
    let students = this.studentsData;

    if (searchTerm && searchTerm !== '') {
      students = this.studentsData.filter((student) => {
        const names = [student.name.toLowerCase(), student.surname.toLowerCase()];
        return names.join(' ').search(searchTerm) > -1 || names.reverse().join(' ').search(searchTerm) > -1;
      });
    }

    this.students = students;
  }
}
