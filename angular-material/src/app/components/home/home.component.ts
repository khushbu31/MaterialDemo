import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { DataService } from 'src/app/service/data.service';
import { TableFieldDialogComponent } from '../table-field-dialog/table-field-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("formField") formField : ElementRef;

  data: any;
  constructor(private dialog: MatDialog, 
              private dataService: DataService,
              private renderer : Renderer2) { }

  title = 'angular-material';
  displayedColumns :string[]=[];
  dataSource: any;
  display = false;

  ngOnInit() {
    this.dataService.getElements().subscribe(
      (response) => {
          // this.dataService.displayedColumns.map((value)=>{
          //   this.displayedColumns.push(value.value);
          // });
          this.displayedColumns =this.dataService.displayedColumns ;
          //this.displayedColumns = this.displayedColumns.slice(0,3);
          this.dataSource = new MatTableDataSource(response.data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
    });
  }

  showFieldsDialog()
  {
    console.log(this.dataService.totalColumns,"Total Cols");
    const dialogRef = this.dialog.open(TableFieldDialogComponent, { data:{'totalCols':this.dataService.totalColumns,'displayCols':this.dataService.displayedColumns}, height: '450px', width: '300px' });
    dialogRef.afterClosed().subscribe(
      (result) => {
        //console.log(result,"Result");
        //this.displayedColumns = result.data;
      }
    );
  }

  showInput(){
    this.display = !this.display;
  }

  displayData(row) {
    this.data = row;
    console.log(row);
  }

  applyFilter(text: string) {
    this.dataSource.filter = text.trim();
  }
  add() {
    const dialogRef = this.dialog.open(AddDialogComponent,{height: '650px', width: '450px' });
    dialogRef.afterClosed().subscribe(
      (result) => {
        this.ngOnInit();
      }
    );
  }

  edit(row) {
    const dialogRef = this.dialog.open(DialogExampleComponent, { data: row, height: '450px', width: '300px' });
    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log(result);
      }
    );
  }

  delete(row) {
    console.log('delete');
    console.log(row, 'Delete Data');
    const dialogRef = this.dialog.open(DeleteDialogComponent, { position: { top: '5px', } });
    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log(result);
      }
    );
  }
}
