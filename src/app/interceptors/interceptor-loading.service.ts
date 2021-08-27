import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LoadingService } from '../services/loading-service/loading.service';
import { catchError } from 'rxjs/operators'
import { ErrorService } from '../services/error-service/error.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorLoadingService implements HttpInterceptor {

  constructor(private loadingService: LoadingService,
              private errorService: ErrorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.loadingService.start();
    this.errorService.end();
    return next.handle(req).pipe(
      catchError((err) => {
              setTimeout((err) => {
                this.loadingService.end();
                this.errorService.start();
              }, 2000)
                return throwError(err);
            })
    );
  }

}
