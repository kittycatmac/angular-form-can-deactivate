import { Component, OnInit ,ViewChild, HostListener} from '@angular/core';
import {FormCanDeactivate} from '../form-can-deactivate/form-can-deactivate';
import {NgForm, FormGroup, FormControlName, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends FormCanDeactivate   {
  mustComment = this.fb.group({
    choose: ['', Validators.required],
    comment: ['']
  })
  
  name:string;
  //submitted = false;

    /* Select Dropdown error handling, but it's not working bc of hasError() */
  // public handleError = (controlName: string, errorName: string) => {
  //   return this.mustComment.controls[controlName].hasError(errorName);
  // }

  constructor(private fb: FormBuilder) {
    super()
   }

  @ViewChild('form')
  form: NgForm;

  onChange(e) {
    //this.submitted = true;
    this.mustComment.get('choose').setValue(e.target.value, {
      onlySelf: true
    })
  }
 
  onSubmit(){
   console.warn(this.mustComment.value);
  }
  

}