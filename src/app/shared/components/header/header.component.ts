import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dropdownPopoverShow = false;
  showNavbar: boolean = false;
  showMobileMenu: boolean = false;
  showIndusrtyMenu: boolean = false;
  
  onbuttonclick() {}
}
