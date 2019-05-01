import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './views/search/search.component';
import { ResultsComponent } from './views/results/results.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton, MatButtonModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
