import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Country, VisitState} from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  selectedCountry$ = new Subject<Country>();

  countryClicked(country: Country) {
    this.selectedCountry$.next(country);
  }

  changeCountryState(country: Country, state: VisitState) {
      console.log('New state:', state, country.name);
  }
}
