import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurBrandsComponent } from './our-brands.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: OurBrandsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class OurBrandsModule {}
