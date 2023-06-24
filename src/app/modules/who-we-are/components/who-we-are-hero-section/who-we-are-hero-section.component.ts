import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-who-we-are-hero-section',
  templateUrl: './who-we-are-hero-section.component.html',
  styleUrls: ['./who-we-are-hero-section.component.scss'],
})
export class WhoWeAreHeroSectionComponent {
  image!: string;
  text!: string;

  constructor(private _dataservice: DataService, private _cdr: ChangeDetectorRef) {}

  
  ngOnInit() {
    this._dataservice.getWhoWeAreHeroSection().subscribe((data) => {
      this.image = data.image;
      this.text = data.text;
      this._cdr.markForCheck()
    });
  }
}
