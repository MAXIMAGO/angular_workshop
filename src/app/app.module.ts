import { AppRoutingModule } from './app.routing';
import { IN_MEMORY_DB } from './storage/in-memory.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IN_MEMORY_DB
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
