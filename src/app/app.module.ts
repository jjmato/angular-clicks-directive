import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { SharedModule } from './shared/shared.module';
import { Module1Module } from './module-1/module-1.module';
import { ButtonComponent } from './button/button.component';
import { Module2Module } from './module-2/module-2.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SharedModule, Module1Module, Module2Module ],
  declarations: [ AppComponent, HelloComponent, ButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
