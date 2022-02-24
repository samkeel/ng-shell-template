import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly themeAnchor = this.document.getElementById('app-theme');
  currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';
  @Input() inputSideNav!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((results) => results.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private sb: SnackbarService
  ) {}

  ngOnInit() {}

  themeToggle() {
    if (this.currentTheme === 'light-theme') {
      this.currentTheme = 'dark-theme';
      this.renderer.setAttribute(this.themeAnchor, 'href', '/dark-theme.css');
    } else {
      this.currentTheme = 'light-theme';
      this.renderer.setAttribute(this.themeAnchor, 'href', '/light-theme.css');
    }
    this.snackStatus();
  }

  snackStatus() {
    if (this.currentTheme === 'light-theme') {
      this.sb.openSnackBar('Light theme', '');
    } else {
      this.sb.openSnackBar('Dark theme', '', 2);
    }
  }
}
