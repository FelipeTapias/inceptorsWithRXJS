import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from '../../services/loading-service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

   mostrar$ = new BehaviorSubject<boolean>(false);

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {

    this.mostrar$ = this.loadingService.mostrar$;

  }

}
