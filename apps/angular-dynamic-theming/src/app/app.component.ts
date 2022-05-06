import { Component, HostBinding, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'angular-dynamic-theming-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-theming';
  styles: any = {};

  @HostBinding('style') parentStyle: any;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getThemeConfiguration().subscribe((styles) => {
      this.styles = styles;
      this.parentStyle = this.styles;
    });
  }

  primaryFontColorChanged(val: any) {
    console.log(val);
    this.parentStyle['--primaryFontColor'] = val.target.value;
    this.parentStyle = { ...this.parentStyle };
  }

  primaryHeaderColorChanged(val: any) {
    this.parentStyle['--primaryHeaderColor'] = val.target.value;
    this.parentStyle = { ...this.parentStyle };
  }

  primaryFontSizeChanged(val: any) {
    this.parentStyle['--fontSize'] = val.target.value + 'px';
    this.parentStyle = { ...this.parentStyle };
  }

  primaryFontStyleChanged(val: any) {
    this.parentStyle['--primaryFontStyle'] = val.target.value;
    this.parentStyle = { ...this.parentStyle };
  }

  primaryFontWeightChanged(val: any) {
    this.parentStyle['--primaryFontWeight'] = val.target.value;
    this.parentStyle = { ...this.parentStyle };
  }
}
