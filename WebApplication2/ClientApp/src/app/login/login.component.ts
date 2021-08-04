import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserServiceService, private avRoute: ActivatedRoute, private router: Router) { 
    
  }

  login() {
    this.userService.getUsers()
      .subscribe((data) => {
       data.forEach((user) =>{
         if (user.email == this.LoginForm.get("email").value && user.password == this.LoginForm.get("password").value){
          this.router.navigate(['/']);
         }
       })
      });
  }

  get email() { return this.LoginForm.get("email"); }
  get password() { return this.LoginForm.get("password"); }

  ngOnInit() { }
}
