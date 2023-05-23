import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustryPageComponent } from './industry-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndustryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndustryPageModule {}
