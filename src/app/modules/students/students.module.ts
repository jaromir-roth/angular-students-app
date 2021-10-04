import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { StudentsRoutingModule } from './students-routing.module';

import { StudentListPageComponent } from './pages/student-list-page/student-list-page.component';
import { StudentAddNewPageComponent } from './pages/student-add-new-page/student-add-new-page.component';
import { StudentListTableComponent } from './components/student-list-table/student-list-table.component';
import { StudentListFilterComponent } from './components/student-list-filter/student-list-filter.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

import StudentsService from './services/students.service';
import StudentsFacade from './students.facade';

@NgModule({
  declarations: [
    StudentListPageComponent,
    StudentAddNewPageComponent,
    StudentListTableComponent,
    StudentListFilterComponent,
    StudentFormComponent,
  ],
  imports: [
    CommonModule,
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
