import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut()
    .subscribe(data =>{
      this.currentUser = null;
      this.router.navigate(['/login']);
    },err => {

    });
  }

}
