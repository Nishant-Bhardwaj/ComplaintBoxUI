import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  title = 'complaintbox';
  username : String;
  password : String;
  token = '';
  
  constructor(
    private loginService : LoginService,
    private router : Router,
    private formsModule : FormsModule
  ){}
  
  login(){
    console.log("Username: "+ this.username)

    this.loginService.authAndGetToken(this.username, this.password).subscribe(
      res=>{
        this.token = res.token;
        localStorage.setItem("token", this.token);
        console.log("result : "+ this.token);
        this.testToken(this.token);
      },
      error=>{
        alert("Bad Credentials!!")
      }
      
    );
  }

  testToken(token: string) {

    this.loginService.testToken(token).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(["dashboard", res]);
        
      },
      error=>{
        alert("Bad Request!!")
      }
    );
  }

}
