import { CountryDirective } from './country.directive';

xdescribe('CountryDirective', () => {
  it('should create an instance', () => {
    const directive = new CountryDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
