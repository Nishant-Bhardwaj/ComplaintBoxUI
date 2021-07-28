import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient : HttpClient
  ) { }

  signUpUser(signPayload: any) {
    console.log("Sign up service, " + signPayload)

    var url = "http://localhost:8876/signup";

    // var token = "Bearer "+localStorage.getItem("token");
    // const headers = new HttpHeaders().set("Authorization",token); 

    return this.httpClient.post(url, signPayload, {responseType: 'text' as 'json'});
  }
}
