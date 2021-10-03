import * as moment from 'moment';

export default interface IStudent {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: number;
  birthDate: moment.Moment;
  initials: string;
}
