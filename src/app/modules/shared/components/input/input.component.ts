import {
  Component, Input, Optional, Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements ControlValueAccessor {
  public value: any = '';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onChange = (value: string) => {};

  public onTouched = () => {};

  @Input() public required: boolean;

  @Input() public disabled: boolean;

  @Input() public label: string;

  @Input() public placeholder: string = '';

  @Input() public type: 'text' | 'email' | 'password' | 'date' = 'text';

  @Input() public min: string | number;

  @Input() public max: string | number;

  constructor(
    @Self()
    @Optional()
    public ngControl: NgControl,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
