import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpInterceptor,
  HttpHandler
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!(req.url.endsWith('register') || req.url.endsWith('categories/all'))) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer: ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(req);
  }
}
