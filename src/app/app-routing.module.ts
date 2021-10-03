import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './modules/core/components/layout/layout.component';
import { NotFoundPageComponent } from './modules/core/pages/not-found-page/not-found-page.component';

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
      {
        path: '**',
        component: NotFoundPageComponent,
        data: { title: '404' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
