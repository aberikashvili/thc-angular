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
    path: 'industry',
    loadChildren: () => import('./modules/industry/industry.module').then((m) => m.IndustryModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'our-brands',
    loadChildren: () =>import('./modules/our-brands/our-brands.module').then((m) => m.OurBrandsModule),
  },

  { path: 'news-details',
   loadChildren: () => import('./modules/news-details/news-details.module').then(m => m.NewsDetailsModule) },
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
