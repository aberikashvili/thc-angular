import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DistributioncenterComponent } from './components/distributioncenter/distributioncenter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, DistributioncenterComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
