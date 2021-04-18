import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class HourlyWeatherGuard implements CanActivate, CanDeactivate<boolean> {

  constructor(private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const { city } = route.params;
    const cities = [
      'szczecin',
      'warszawa',
      'krakow',
      'berlin',
      'amsterdam'
    ];

    if (!cities.includes(city)) {
      this.router.navigate([`/404`]);
      return false;
    } else {
      return true;
    }
  }

  public canDeactivate(): boolean {
    return true;
  }
}
