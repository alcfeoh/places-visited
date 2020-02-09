import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
import {CountryService} from './country.service';
import {filter, map} from 'rxjs/operators';
import {VisitState} from './country';

@Directive({
  selector: 'path'
})
export class CountryDirective {

  @HostBinding('class')
  class: VisitState = 'neverBeen';

  nativeEltAttrs;

  constructor(element: ElementRef, private service: CountryService) {
    this.nativeEltAttrs = element.nativeElement.attributes;
    service.state$.asObservable().pipe(
      map(countries => countries[element.nativeElement.attributes.id.value]),
      filter(value => (value))
    ).subscribe(state => this.class = state);
  }

  @HostListener('click')
  clicked() {
    this.service.countryClicked({id: this.nativeEltAttrs.id.value, name: this.nativeEltAttrs['data-name'].value});
  }
}
