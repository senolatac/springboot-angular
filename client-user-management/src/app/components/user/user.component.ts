import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId: string;
  currentUser: User;

  constructor(private router: Router, private route: ActivatedRoute) {
      this.currentUser = JSON.parse(localStorage.getItem("detailUser"));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.userId = params.get('id');
      }
    });
  }

}
