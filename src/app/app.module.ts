import { IN_MEMORY_DB } from './storage/in-memory.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemberBoxComponent } from './member-box/member-box.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MemberBoxComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IN_MEMORY_DB
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
