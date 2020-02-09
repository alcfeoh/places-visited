import { Injectable } from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {Country, VisitState} from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  selectedCountry$ = new Subject<Country>();
  countries = {};
  state$ = new ReplaySubject(1);

  constructor() {
    this.countries = JSON.parse(localStorage.getItem('visitedCountries')) || {};
    this.state$.next(this.countries);
  }

  countryClicked(country: Country) {
    this.selectedCountry$.next(country);
  }

  changeCountryState(country: Country, state: VisitState) {
    this.countries[country.id] = state;
    console.log('New state:', this.countries);
    localStorage.setItem('visitedCountries', JSON.stringify(this.countries));
    this.state$.next(this.countries);
  }
}
