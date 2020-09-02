import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxStrCasesModule } from 'ngx-str-cases';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStrCasesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
