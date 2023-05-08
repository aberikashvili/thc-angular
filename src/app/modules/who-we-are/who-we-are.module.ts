import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WhoWeAreComponent } from './who-we-are.component';

const routes: Routes = [
  {
    path: '',
    component: WhoWeAreComponent,
  },
];

@NgModule({
  declarations: [WhoWeAreComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class WhoWeAreModule {}
