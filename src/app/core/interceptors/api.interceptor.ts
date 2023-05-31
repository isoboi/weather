import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment.development";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = new HttpHeaders();

    const interceptedRequest = request.clone({
      headers,
      url: environment.apiUrl + request.url,
    });

    return next.handle(interceptedRequest);
  }
}
