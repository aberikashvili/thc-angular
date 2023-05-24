import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
     
  },
];

@NgModule({
  declarations: [ ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class BrandDetailsModule {}

