import { Component, OnInit } from '@angular/core';
import { DyField, DynamicFormParameter } from '../../models/parameter-interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements DyField {
  dynamicFormParameter: DynamicFormParameter;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
