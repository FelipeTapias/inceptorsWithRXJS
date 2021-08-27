import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enpoint } from '../../../environments/environment';
import { nameRoutes } from '../../util/name-routes';
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  enpointApi = enpoint.user;


  constructor(private http: HttpClient) { }

  getAllUser() {
    let params = new HttpParams().append('page', '2');
    return this.http.get(`${this.enpointApi}${nameRoutes.user}`, {params}).pipe(
      map(resp => resp['data']),
      catchError(err => {
              console.log('Sucedio un error');
              console.log('No esta controlado');
              console.warn(err);
              return throwError('Error personalizado');
            })
    );
  }
}
