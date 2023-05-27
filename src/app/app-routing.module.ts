import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsPageModule } from './modules/news-details-page/news-details-page.module';

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
  {
    path:'news-detail-page',
    loadChildren: ()=> import ( './modules/news-details-page/news-details-page.module').then((m)=>NewsDetailsPageModule)
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
