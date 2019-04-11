import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.user).subscribe(data => {
      this.router.navigate(['/profile']);
    },err =>{
      this.errorMessage ="Username or password is incorrect";
    });
  }

}
