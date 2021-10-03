import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './modules/core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'students',
        loadChildren: () => import('./modules/students/students.module').then((m) => m.StudentsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
