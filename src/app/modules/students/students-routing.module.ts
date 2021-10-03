import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListPageComponent } from './pages/student-list-page/student-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListPageComponent,
    data: { title: 'Seznam studentů' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class StudentsRoutingModule {}
