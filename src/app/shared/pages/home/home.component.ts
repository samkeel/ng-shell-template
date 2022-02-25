import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cols = 12;
  // rowHeight = '500px';
  rowHeight="1:1.5";
  // gutterSpace = 16;
  colFullSpan = 12;
  colHalfSpan = 6;

  handsetDisplay = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletLandscape,
      ])
      .subscribe((result) => {
        // default Web Breakpoints
        this.cols = 12;
        this.rowHeight="1:1.4";
        this.handsetDisplay = false;

        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.cols = 4;
          this.rowHeight="1:1.35";
          this.handsetDisplay = true;
          console.log('handset portrait');
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.cols = 2;
          console.log('tablet landscape');
        }

        console.log(this.cols);

        this.colFullSpan = this.cols;
        this.colHalfSpan = this.cols / 2;
      });
    // this.isTabletDisplay$ = this.breakpointObserver.observe{[]}
  }

  // layout from material guide:
  // https://material.io/archive/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints

  // BreakpointObserver predefined breakpoints
  // Breakpoints: {
  //   XSmall: string;
  //   Small: string;
  //   Medium: string;
  //   Large: string;
  //   XLarge: string;
  //   Handset: string;
  //   Tablet: string;
  //   Web: string;
  //   HandsetPortrait: string;
  //   TabletPortrait: string;
  //   WebPortrait: string;
  //   HandsetLandscape: string;
  //   TabletLandscape: string;
  //   WebLandscape: string;
  // };
}
