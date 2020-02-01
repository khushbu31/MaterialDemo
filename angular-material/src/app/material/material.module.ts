import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatIconModule,
  MatDialog,
  MatDialogModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatCheckboxModule
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

const Material = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatCheckboxModule,
  ScrollingModule,

];

@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
