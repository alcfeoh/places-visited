import { Component } from '@angular/core';
import {CountryService} from './country.service';
import {Country} from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedCountry: Country;

  constructor(countryService: CountryService) {
    countryService.selectedCountry$.asObservable().subscribe(country => this.selectedCountry = country);
  }
}
