import {Component, Input} from '@angular/core';
import {Country, VisitState} from '../country';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.scss']
})
export class CountryModalComponent {

  @Input()
  opened = false;

  @Input()
  country: Country;

  constructor(private countryService: CountryService) {
  }

  done(decision?: VisitState) {
    if (decision) {
        this.countryService.changeCountryState(this.country, decision);
    }
    this.opened = false;
  }

}
