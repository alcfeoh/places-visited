import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Country, VisitState} from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  selectedCountry$ = new Subject<Country>();
  countries: VisitState[] = [];
  state$ = new Subject<VisitState[]>();

  countryClicked(country: Country) {
    this.selectedCountry$.next(country);
  }

  changeCountryState(country: Country, state: VisitState) {
    this.countries[country.id] = state;
    console.log('New state:', this.countries);
    this.state$.next(this.countries);
  }
}
