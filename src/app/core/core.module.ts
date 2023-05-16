import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MockupInterceptor } from './interceptors/mockup.interceptor';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockupInterceptor, multi: true }],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    // Do not allow multiple injections
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule only.'
      );
    }
  }
}
