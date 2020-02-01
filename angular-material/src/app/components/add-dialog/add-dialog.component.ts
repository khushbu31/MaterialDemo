import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes'
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  addForm:FormGroup;
  
  // country autocomplete

  countries : string[] =  ['India','Indonesia','Canada','Egypt','Nepal']
  filteredContries : Observable<string[]>;
  
  // chips
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER,COMMA];

  constructor(private formBuilder:FormBuilder,private dataService:DataService) { 
    this.addForm = this.formBuilder.group({
      'firstName':[null,Validators.compose([Validators.required,Validators.minLength(8)])],
      'lastName':[null,Validators.required],
      'email':[null, Validators.compose([Validators.required, Validators.email])],
      'password':[null,Validators.compose([Validators.required,Validators.minLength(8)])],
      'gender':['male'],
      'country':[null,Validators.required],
      'skills':this.formBuilder.array([],Validators.required)
    })
  }

  ngOnInit() {
    // this.addForm = this.formBuilder.group({
    //   'position':[null],
    //   'name':[null],
    //   'weight':[null],
    //   'symbol':[null],
    // })
    if(this.addForm.get('skills').touched)
    {
      console.log(this.addForm.get('skills.skills').touched); 
    }
    this.filteredContries = this.addForm.get('country').valueChanges.pipe(
      map(value => 
          this.filterCountries(value)
      )
    );
  }

  errorMessage(control: string, validators: string[]): string {
    const mycontrol = this.addForm.controls[control];
    return mycontrol.hasError('required')?"This Field is Required":
           mycontrol.hasError('pattern') ?'This is not valid pattern':
           mycontrol.hasError('minlength')?'Minimum length is 8':
           mycontrol.hasError('email')?'This is not valid email':'';
  }

  add(event: MatChipInputEvent)
  {
      let input = event.input;
      let value = event.value;
      console.log("INPUT",input);
      console.log("VALUE",value);
      if (value.trim()) {
          console.log((value+''+"ghghfh"));
          const skills = this.addForm.get('skills') as FormArray;
          skills.push(this.formBuilder.control(value.trim()));
      }
      if (input) {
          input.value = '';
      }
  }
  remove(index: number)
  {
    const skills = this.addForm.get('skills') as FormArray;
    if (index >= 0) {
        skills.removeAt(index);
    }
  }

  filterCountries(value:any)
  { const filterValue = value.toLowerCase();
    return this.countries.filter(country => country.toLowerCase().includes(filterValue));
  }
  onSubmit()
  {
      
      // this.addForm.value.position = 11;
      // console.log(this.addForm.value);
      // this.dataService.addElement(this.addForm.value);
      console.log(this.addForm.value.skills);
      // this.dataService.addElement(this.addForm.value);
  }

}
