import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { StudentsRoutingModule } from './students-routing.module';

import { StudentListPageComponent } from './pages/student-list-page/student-list-page.component';
import { StudentListTableComponent } from './components/student-list-table/student-list-table.component';
import { StudentListFilterComponent } from './components/student-list-filter/student-list-filter.component';

import StudentsService from './services/students.service';
import StudentsFacade from './students.facade';

@NgModule({
  declarations: [
    StudentListPageComponent,
    StudentListTableComponent,
    StudentListFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StudentsRoutingModule,
  ],
  providers: [
    StudentsFacade,
    StudentsService,
  ],
})
export class StudentsModule { }
