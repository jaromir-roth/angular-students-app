import * as moment from 'moment';

import IStudentDto from '../models/student-dto.model';
import IStudent from '../models/student.model';

export default class StudentsMapper {
  public static toList(students: IStudentDto[]): IStudent[] {
    return students.map((student) => this.toItem(student));
  }

  public static toItem(student: IStudentDto): IStudent {
    return {
      id: student.id,
      name: student.name,
      surname: student.surname,
      email: student.email,
      phone: student.phone,
      birthDate: moment(student.birthDate, 'YYYY-MM-DD'),
      initials: `${student.surname.charAt(0)}${student.name.charAt(0)}`,
    } as IStudent;
  }
}
