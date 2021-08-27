import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-service/user-list.service';
import { LoadingService } from '../../services/loading-service/loading.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data;

  constructor(private serviceUser: UserListService,
              private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.serviceUser.getAllUser().subscribe(res => {
      setTimeout(() => {
        this.loadingService.end();
        this.data = res;
        console.log(this.data);
      }, 3000);
    }, (err) => {
      console.log('Error en el componente user');
    });
  }

}
