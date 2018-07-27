import { MaterialModule } from './material/material.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { AppRoutingModule } from './app.routing';
import { IN_MEMORY_DB } from './storage/in-memory.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';
import { ShoutPipe } from './pipes/shout.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    AsyncpipeComponent,
    ShoutPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    IN_MEMORY_DB,
    TooltipModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
