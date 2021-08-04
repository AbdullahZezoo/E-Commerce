import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserServiceService, private avRoute: ActivatedRoute, private router: Router) { 
    
  }

  register() {
    let user: User = {
      username: this.RegisterForm.get("username").value,
      email: this.RegisterForm.get("email").value,
      password: this.RegisterForm.get("password").value
    };
    this.userService.addUser(user)
      .subscribe((data) => {
        this.router.navigate(['/']);
      });
  }

  ngOnInit() {
  }

}
