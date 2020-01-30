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
  //buttonDisabled: boolean = false;

  constructor(private fb: FormBuilder) {
    super()
   }

  //public mustComment: FormGroup;
  // mustComment = new FormGroup({
    
  // });

  @ViewChild('form')
  form: NgForm;
  // mustComment = new FormGroup({
  //   choose: new FormControl()
  // });

  onChange(e) {
    this.mustComment.get('name').setValue(e.target.value, {
      onlySelf: true
    })
  }
 
  onSubmit(){
   console.warn(this.mustComment.value);
  }
  

}