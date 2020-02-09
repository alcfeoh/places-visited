import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { CountryDirective } from './country.directive';
import { CountryModalComponent } from './country-modal/country-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    CountryDirective,
    CountryModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
