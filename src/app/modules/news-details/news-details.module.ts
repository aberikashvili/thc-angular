import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailsRoutingModule } from './news-details-routing.module';
import { NewsDetailsComponent } from './news-details.component';
import { OurBrandssectionComponent } from './components/our-brandssection/our-brandssection.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        NewsDetailsComponent, OurBrandssectionComponent
    ],
    imports: [
        CommonModule,
        NewsDetailsRoutingModule,
        SharedModule
    ]
})
export class NewsDetailsModule { }
