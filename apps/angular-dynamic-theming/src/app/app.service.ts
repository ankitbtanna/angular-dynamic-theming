import * as theme from './theme.config.json';

import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }
  
  getThemeConfiguration(): Observable<{ [key: string]: string | number }> {
    const currentTheme = JSON.parse(JSON.stringify(theme));
    const styles: any = {};
    for (const property in currentTheme) {
      if (property === 'default') continue;
      
      styles[property] = currentTheme[property];
    }
    console.log(styles);
    return of(styles);
  }
}
