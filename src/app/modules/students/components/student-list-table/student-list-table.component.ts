import { Component, Input } from '@angular/core';

import IStudent from '../../models/student.model';

@Component({
  selector: 'app-student-list-table',
  templateUrl: './student-list-table.component.html',
  styleUrls: ['./student-list-table.component.scss'],
})
export class StudentListTableComponent {
  @Input() public students: IStudent[];

  public trackBy(_: number, student: IStudent): number {
    return student.id;
  }
}
