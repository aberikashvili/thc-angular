import { Component } from '@angular/core';

@Component({
  selector: 'app-header-responsive',
  templateUrl: './header-responsive.component.html',
  styleUrls: ['./header-responsive.component.scss'],
})
export class HeaderResponsiveComponent {
  dropdownPopoverShow = true;
  showNavbar: boolean = true;
  showMobileMenu: boolean = true;
  showIndusrtyMenu: boolean = false;
   onbuttonclick() {}
   
}
 