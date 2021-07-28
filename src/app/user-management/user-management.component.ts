import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  username : string;
  email : string;
  mobile : number;
  department : string;
  password : string;
  confirmPassword : string;

  constructor(
    private router : Router,
    private userService : UserService
  ) { }

  ngOnInit(): void {
  }

  signUp(){
    console.log(this.username + " " + this.email + " " + this.mobile + " " + this.department + " " + this.password + " " + this.confirmPassword)
    
    var signPayload = {
      username : this.username,
      email : this.email,
      mobile : this.mobile,
      department : this.department,
      password : this.password,
      confirmPassword : this.confirmPassword
    }

    this.userService.signUpUser(signPayload).subscribe(data=>{  
      console.log("Data: "+data);
      alert("User Registered Successfully!!");
      this.router.navigateByUrl("login")
    });
  }
}
