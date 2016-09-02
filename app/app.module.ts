import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import {Logger} from './logger.service';
import {BetterLogger} from './better-logger.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [AppComponent],
  providers: [Logger, { provide: Logger, useClass: BetterLogger }]

})

export class AppModule { }