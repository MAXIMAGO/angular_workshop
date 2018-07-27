import { TooltipModule } from './tooltip/tooltip.module';
import { AppRoutingModule } from './app.routing';
import { IN_MEMORY_DB } from './storage/in-memory.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';
import { ShoutPipe } from './pipes/shout.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AsyncpipeComponent,
    ShoutPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IN_MEMORY_DB,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
