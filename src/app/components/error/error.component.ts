import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ErrorService } from '../../services/error-service/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  mostrar$ = new BehaviorSubject<boolean>(false)

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.mostrar$ = this.errorService.mostrar$;
  }

}
