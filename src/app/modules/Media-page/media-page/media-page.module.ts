import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaPageRoutingModule } from './media-page-routing.module';
import { MediaPageComponent } from './media-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndustriesGalleryComponent } from './industries-gallery/industries-gallery.component';
import { AllGalleryComponent } from './all-gallery/all-gallery.component';

@NgModule({
  declarations: [MediaPageComponent, IndustriesGalleryComponent, AllGalleryComponent],
  imports: [CommonModule, MediaPageRoutingModule, SharedModule],
})
export class MediaPageModule {}
