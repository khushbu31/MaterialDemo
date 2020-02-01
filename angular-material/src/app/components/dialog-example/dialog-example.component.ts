import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  updateForm:FormGroup;
  addForm:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private formBuilder:FormBuilder,
              private dialogRef : MatDialogRef<DialogExampleComponent>) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      'name':[this.data.name],
      'weight':[this.data.weight],
      'symbol':[this.data.symbol],
    })
    // if(!this.data)
    // {
    //   this.updateForm = this.formBuilder.group({
    //     'name':[null],
    //     'weight':[null],
    //     'symbol':[null],
    //   })
      
    // }
    // else
    // {
    //   this.addForm = this.formBuilder.group({
    //     'name':[this.data.name],
    //     'weight':[this.data.weight],
    //     'symbol':[this.data.symbol],
    //   })
    // }
    //console.log(this.data,"KHYGU");
  }

  onUpdate()
  {
    this.dialogRef.afterClosed().subscribe((result)=>{
      console.log(this.updateForm.value,"DATA");
    })
  }
  close() {
    this.dialogRef.close();
  }

  onSubmit()
  {
    this.dialogRef.afterClosed().subscribe((result)=>{
      console.log(this.addForm,"DATA");
    })
  }
}
