import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../model/user";
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: Array<User>;
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['detail', 'id', 'name', 'username'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.findAllUsers();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllUsers(){
    this.authService.findAllUsers().subscribe(data => {
      this.userList = data;
      this.dataSource.data = data;
    });
  }

  detail(user: User) {
    this.router.navigate(['/user', user.id]);
    localStorage.setItem('detailUser', JSON.stringify(user));
  }

}
