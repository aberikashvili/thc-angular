import { Component, Input } from '@angular/core';
import { IndustryBrands } from '../../models/industry-brands-and-galleries.model';

@Component({
  selector: 'app-industry-brands',
  templateUrl: './industry-brands.component.html',
  styleUrls: ['./industry-brands.component.scss'],
})
export class IndustryBrandsComponent {
  @Input() brandsValue!: IndustryBrands;
}
