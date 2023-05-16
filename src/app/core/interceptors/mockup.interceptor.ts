import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MockupInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (httpRequest.url.includes('/api/')) {
      const splitted = httpRequest.url.split('/');

      if (splitted.length <= 2) {
        throw new Error('Invalid API url');
      }

      const reqCtx = splitted[2];
      const id = splitted[3] || null;

      let jsonFileUrl = `/assets/api/${reqCtx}`;

      if (id) {
        jsonFileUrl += `/${id}.json`;
      } else {
        jsonFileUrl += `/index.json`;
      }

      return next.handle(
        httpRequest.clone({
          url: jsonFileUrl,
        })
      );
    }

    return next.handle(httpRequest);
  }
}
