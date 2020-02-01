import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-table-field-dialog',
  templateUrl: './table-field-dialog.component.html',
  styleUrls: ['./table-field-dialog.component.css']
})
export class TableFieldDialogComponent implements OnInit {

  fieldForm : FormGroup;
  fieldsDisplay:string[];
  displayCols:any[]=[];
  constructor(@Inject(MAT_DIALOG_DATA) public fields:any,
              private dialogRef : MatDialogRef<TableFieldDialogComponent>,
              private formBuilder:FormBuilder,
              private dataService:DataService) { }


  ngOnInit() {
    console.log(this.fields.displayCols,"Display Cols"); 
    //console.log(this.fields.totalCols,"Total Cols"); 
    //this.displayCols=this.fields.displayCols;
    this.fields.totalCols.forEach(element => {
      if(this.fields.displayCols.indexOf(element)!=-1)
      {
        console.log(element);
        this.displayCols.push({'checked':true,'value':element})
        //this.displayCols.push(element);
      }
      else
      {
        this.displayCols.push({'checked':false,'value':element})
        //this.displayCols.push(element);

      }
    });
    console.log(this.displayCols);
    this.fieldForm= this.formBuilder.group({
      'fields':this.formBuilder.array([])
    })
    
  }

  addField(event,i){
    let fieldsChecked= this.fieldForm.get('fields') as FormArray;
    if(event.checked)
    {
      this.dataService.displayedColumns.push(event.source.value)
      console.log(this.dataService.displayedColumns);
    }
    else
    {
      //console.log(this.dataService.displayedColumns.includes(event.source.value));
      const index = this.dataService.displayedColumns.indexOf(event.source.value);
      this.dataService.displayedColumns.splice(index,1);
      // this.dataService.displayedColumns = this.dataService.displayedColumns.filter(()=>{
      //   this.displayCols.includes(event.source.value)
      // });
      // console.log(this.dataService.displayedColumns.filter(()=>{
      //     this.displayCols.includes(event.source.value)
      // }));
      
    }
    //fieldsChecked.push(this.formBuilder.control(event.source.value));
  }

  onSubmit(){
    console.log(this.fieldForm.value,"DATA");
    this.displayCols= this.fieldForm.value;
    this.dialogRef.close({event:'close',data:this.fieldForm.value.fields}); 
  }
}
