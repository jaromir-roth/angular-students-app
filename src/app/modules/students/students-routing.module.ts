import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListPageComponent } from './pages/student-list-page/student-list-page.component';
import { StudentAddNewPageComponent } from './pages/student-add-new-page/student-add-new-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListPageComponent,
    data: { title: 'Seznam studentů' },
  },
  {
    path: 'add-new',
    component: StudentAddNewPageComponent,
    data: { title: 'Přidání nového studenta' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
