import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DistributioncenterComponent } from './components/distributioncenter/distributioncenter.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, DistributioncenterComponent, WhoWeAreComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
