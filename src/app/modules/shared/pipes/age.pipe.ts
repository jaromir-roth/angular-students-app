import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {
  public transform(value: moment.Moment): string {
    return `${moment().diff(value, 'years').toString()} let`;
  }
}
