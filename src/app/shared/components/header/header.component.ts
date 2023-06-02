import { HttpHeaderResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderResponsiveComponent } from './header-responsive/header-responsive.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dropdownPopoverShow = false;
  showNavbar: boolean = false;
  showMobileMenu: boolean = false;
  showIndusrtyMenu: boolean = false;

  onbuttonclick() {}
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(HeaderResponsiveComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
