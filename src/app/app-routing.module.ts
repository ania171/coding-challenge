import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HourlyWeatherComponent } from './weather/hourly-weather/hourly-weather.component';
import { HourlyWeatherGuard } from './weather/hourly-weather/hourly-weather.guard';
import { PageNotFoundComponent } from './not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full', },
  { path: '404', component: PageNotFoundComponent,  pathMatch: 'full', },
  { path: ':city', component: HourlyWeatherComponent, canActivate: [HourlyWeatherGuard], canDeactivate: [HourlyWeatherGuard] },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
