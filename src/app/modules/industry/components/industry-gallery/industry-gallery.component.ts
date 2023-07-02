import { Component, Input } from '@angular/core';
import { IndustryGallery } from '../../models/industry-brands-and-galleries.model';

@Component({
  selector: 'app-industry-gallery',
  templateUrl: './industry-gallery.component.html',
  styleUrls: ['./industry-gallery.component.scss'],
})
export class IndustryGalleryComponent {
  @Input() galleryValue!: IndustryGallery;
}
