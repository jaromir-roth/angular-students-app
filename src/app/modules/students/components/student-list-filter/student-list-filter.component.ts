import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-list-filter',
  templateUrl: './student-list-filter.component.html',
  styleUrls: ['./student-list-filter.component.scss'],
})
export class StudentListFilterComponent {
  @Output() public readonly inputChanged = new EventEmitter<string>();

  public searchTerm = new FormControl();

  public onInputChanged(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputChanged.emit(input.value.toLowerCase());
  }
}
