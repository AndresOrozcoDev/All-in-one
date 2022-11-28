// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const apiKey = {
  appid: '674b59719e7fbcdb2fc49ca2edd1ab7d',
}

export const urlBases = {
  urlBaseCountries: 'https://restcountries.com/v3.1/',
  urlBaseWeather: 'https://api.openweathermap.org/data/2.5/', 
  urlBaseCurrency: 'https://api.exchangerate.host/',          // https://exchangerate.host/#/
}

export const endpointResources = {
  allCountries: 'all',
  nameCountry: 'name/',
  weather: 'weather',
  latestRates: 'latest'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
