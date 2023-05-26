import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/HomeModule/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'who-we-are',
    loadChildren: () =>
      import('./modules/who-we-are/who-we-are.module').then((m) => m.WhoWeAreModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./modules/contact-us/contact-us-routing.module').then((m) => m.ContactUsModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
