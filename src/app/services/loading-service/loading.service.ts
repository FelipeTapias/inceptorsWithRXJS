import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  mostrar$ = new BehaviorSubject<boolean>(false);

  start() {
    this.mostrar$.next(true);
  }

  end() {
    this.mostrar$.next(false);
  }

}
