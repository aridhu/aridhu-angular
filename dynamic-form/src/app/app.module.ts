import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './dynamic-form/form-components/dynamic-field.directive';
import { FormInputComponent } from './dynamic-form/form-components/form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    FormInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
