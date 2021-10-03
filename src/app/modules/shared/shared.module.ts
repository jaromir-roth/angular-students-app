import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';

import { AgePipe } from './pipes/age.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    AvatarComponent,
    ButtonComponent,
    AgePipe,
    DateFormatPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AvatarComponent,
    ButtonComponent,
    AgePipe,
    DateFormatPipe,
  ],
})
export class SharedModule { }
