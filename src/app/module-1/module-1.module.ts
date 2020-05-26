import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClicksDirective } from './clicks.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClicksDirective
  ],
  exports: [
    ClicksDirective 
  ]
})
export class Module1Module { }