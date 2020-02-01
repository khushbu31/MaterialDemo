import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginModule } from './components/login/login.module';
import { HeaderModule } from './components/header/header.module';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { TableFieldDialogComponent } from './components/table-field-dialog/table-field-dialog.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    DialogExampleComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    TableFieldDialogComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    HeaderModule,
    HttpClientModule,
  ],
  entryComponents: [
    DialogExampleComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    TableFieldDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
