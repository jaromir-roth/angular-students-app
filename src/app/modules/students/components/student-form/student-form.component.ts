import {
  Component, EventEmitter, Input, OnDestroy, OnInit, Output,
} from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import IStudentFormData from '../../models/student-form-data.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  public minBirthDate: string;

  public static MIN_AGE = 6;

  @Input() public submitting: boolean = false;

  @Output() public readonly submitted = new EventEmitter<IStudentFormData>();

  @Output() public readonly cancelled = new EventEmitter();

  private validitySubscriptions$: Subscription = new Subscription();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.minBirthDate = moment().subtract(StudentFormComponent.MIN_AGE, 'years').format('YYYY-MM-DD');

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      surname: [null, [Validators.required, Validators.maxLength(50)]],
      birthDate: [null, Validators.required],
      email: this.fb.control(null, [
        Validators.required,
        Validators.email,
      ]),
      phone: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^(\\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$'),
      ]),
    });

    this.trackAndValidateContactData();
  }

  ngOnDestroy(): void {
    this.validitySubscriptions$.unsubscribe();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }

    this.submitted.emit({
      name: this.form.value.name,
      surname: this.form.value.surname,
      birthDate: moment(this.form.value.birthDate, 'YYYY-MM-DD'),
      email: this.form.value.email,
      phone: this.form.value.phone,
    });
  }

  public onCancel(): void {
    this.cancelled.emit();
  }

  private trackAndValidateContactData() {
    const emailControl = this.form.get('email') as FormControl;
    const phoneControl = this.form.get('phone') as FormControl;

    this.trackAndValidateControls(emailControl, phoneControl);
    this.trackAndValidateControls(phoneControl, emailControl);
  }

  private trackAndValidateControls(trackControl: FormControl, toggleControl: FormControl): void {
    this.validitySubscriptions$.add(
      trackControl.valueChanges.subscribe((trackControlValue) => {
        const isToggleControlRequired = toggleControl.hasValidator(Validators.required);
        if (!trackControlValue && !isToggleControlRequired) {
          toggleControl.addValidators(Validators.required);
          toggleControl.updateValueAndValidity();
        } else if (trackControlValue && isToggleControlRequired) {
          toggleControl.removeValidators(Validators.required);
          toggleControl.updateValueAndValidity();
        }
      }),
    );
  }
}
