import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeoreComponent } from './heore/heore.component';
import { HeoresComponent } from './heores/heores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeoreComponent,
    HeoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
