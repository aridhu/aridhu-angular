import { Component, ViewChild } from '@angular/core';
import { BackendService } from './services/backend.service';
import { DynamicFormParameter } from './dynamic-form/models/parameter-interface';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) dynamicform: DynamicFormComponent;
  title = 'Aridhu angular dynamic-form';
  samples: Sample[] = [
    {value: 'sample1', viewValue: 'Textbox'},
    {value: 'sample2', viewValue: 'Dropdown Selection'},
    {value: 'sample3', viewValue: 'Choice'}
  ];

  userselection: string;
  dynamicformparameterarray: DynamicFormParameter[];
  dynamicForm: FormGroup;
  
  constructor(private backendservice: BackendService){

  }

  buildDynamicForm($event){
    console.log($event.value);
    this.backendservice.getFormDefinition($event.value)
            .subscribe(
              data => {
                  this.dynamicformparameterarray = data.dynamicarray;
                  console.log("Dynamic Form Array ", this.dynamicformparameterarray);
              },
              error => {
                  console.log("Error", error);
              }
          ); 
  }
  
}


export interface Sample {
  value: string;
  viewValue: string;
}

