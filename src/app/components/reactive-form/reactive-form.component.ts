import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public form:FormGroup
  constructor(private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]]
    });
   }

  ngOnInit(): void {
  }

  submitForm(){
    console.log('Hello');
  }
}
