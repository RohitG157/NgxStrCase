import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CamelcasePipe } from 'ngx-str-cases';

@NgModule({
  declarations: [
    AppComponent,
    CamelcasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
      AppComponent  
    ]
})
export class AppModule { }
