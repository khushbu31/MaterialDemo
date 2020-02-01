import { NgModule } from '@angular/core';

import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const Materials = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule
];
@NgModule({
  declarations: [],
  imports: [Materials],
  exports:[Materials]

})
export class LoginModule { }
