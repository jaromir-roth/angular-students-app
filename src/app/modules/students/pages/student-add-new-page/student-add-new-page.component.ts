/* eslint-disable no-console */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import IStudentFormData from '../../models/student-form-data.model';

@Component({
  selector: 'app-student-add-new-page',
  templateUrl: './student-add-new-page.component.html',
  styleUrls: ['./student-add-new-page.component.scss'],
})
export class StudentAddNewPageComponent {
  public submitting: boolean = false;

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) { }

  public save(data: IStudentFormData): void {
    try {
      this.submitting = true;
      console.log('Saving student: ', data);
    } catch (error) {
      this.submitting = false;
      console.error(error);
    }
  }

  public cancel(): void {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
