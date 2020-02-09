import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
import {CountryService} from './country.service';

@Directive({
  selector: 'path'
})
export class CountryDirective {

  @HostBinding('class')
  fill = 'not-visited';

  constructor(private element: ElementRef, private service: CountryService) {}

  @HostListener('click')
  clicked() {
    const nativeEltAttrs = this.element.nativeElement.attributes;
    this.service.countryClicked({id: nativeEltAttrs.id, name: nativeEltAttrs['data-name'].value});
    this.fill = 'visited';
  }
}
