import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsPageComponent } from './components/news-page/news-page.component';

const routes:Routes=[{
  path:"",component:NewsComponent,
}]

@NgModule({
  declarations: [NewsComponent,NewsPageComponent],
  imports: [RouterModule.forChild(routes),SharedModule,
    CommonModule
  ]
})
export class NewsModule { }
