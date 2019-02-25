import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { DynamicFormParameter } from './models/parameter-interface';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
@Input()
dynamicformparameterarray: DynamicFormParameter[] = [];

@Output()
submit: EventEmitter<any> = new EventEmitter<any>();

form: FormGroup;

get controls() { 
  return this.dynamicformparameterarray.filter(({displayComponent}) => displayComponent.paramType !== 'button');
}

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    const group = new FormGroup({
      productName: new FormControl()
   });
    return group;
  }
  

}
