import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import IStudentDto from '../models/student-dto.model';

@Injectable()
export default class StudentsService {
  constructor(private readonly http: HttpClient) { }

  public getList(): Observable<IStudentDto[]> {
    return this.http.get<IStudentDto[]>('https://cdn.alza.cz/foto/hr/students.json');
  }
}
