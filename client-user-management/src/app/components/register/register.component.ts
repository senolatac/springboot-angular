import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(data =>{
      this.router.navigate(['/login']);
    },err => {
      this.errorMessage = "Username already exist";
    });
  }

}
