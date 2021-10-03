import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import IStudent from './models/student.model';

import StudentsMapper from './services/students.mapper';
import StudentsService from './services/students.service';

@Injectable()
export default class StudentsFacade {
  constructor(private readonly studentsService: StudentsService) { }

  public getList(): Observable<IStudent[]> {
    return this.studentsService.getList().pipe(
      map((result) => StudentsMapper.toList(result)),
    );
  }
}
