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

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string):void {
    this.dialog.open(HeaderResponsiveComponent,  {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-modal',
      height: '100%',
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  onbuttonclick() {}
}
