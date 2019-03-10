import { Directive, Type, OnInit, ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import { DyField, DynamicFormParameter } from '../models/parameter-interface';
import { FormInputComponent } from './form-input/form-input.component';
import { FormGroup } from '@angular/forms';

const dycomponents: {[type:string]: Type<DyField>} = {
  textfield: FormInputComponent

};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  dynamicFormParameter: DynamicFormParameter;
  @Input()
  group: FormGroup;

  currentcomponent: any;
  
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) { }

  ngOnInit(): void {
    if(this.dynamicFormParameter){
      let selectkey = this.dynamicFormParameter.displayComponent.paramType;
      const dycomponent = dycomponents[selectkey];
      if(dycomponent){
        const factory = this.resolver.resolveComponentFactory<any>(dycomponent);
        this.currentcomponent = this.container.createComponent(factory);
        this.currentcomponent.instance.dynamicFormParameter = this.dynamicFormParameter;
        this.currentcomponent.instance.group = this.group;
      }

    }
  }

}
