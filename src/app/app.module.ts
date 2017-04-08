import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OrderByPipe } from './app.orderby.pipe';

import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component'

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
