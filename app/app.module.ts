import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import {Logger} from './logger.service';
import {BetterLogger} from './better-logger.service';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component'
import {HeroService} from './hero.service';
import {routing} from './app.routing';
import {HeroSearchComponent} from './hero-search.component'
import {UserRegisterComponent} from './user-register.component'

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    UserRegisterComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService, { provide: Logger, useClass: BetterLogger }]
})

export class AppModule { }