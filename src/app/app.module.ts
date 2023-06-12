import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RelogioDigitalDinamicoComponent } from './relogio-digital-dinamico/relogio-digital-dinamico.component';
import { TimeComponent } from './relogio-digital-dinamico/time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    RelogioDigitalDinamicoComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
