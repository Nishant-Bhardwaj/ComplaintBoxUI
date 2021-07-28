import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient : HttpClient
  ) {}

  authAndGetToken(username : any, password : any){

    var url = "http://localhost:8876/login";

    console.log("URL: "+url + " username: "+ username+ " password"+ password);

    return this.httpClient.post<any>(url, {"username":username,"password":password});

  }

  testToken(token : string){

    var url = "http://localhost:8876/msg";

    console.log("URL: "+url + " headers: "+ token)

    let tokenStr = 'Bearer '+token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);

    return this.httpClient.get(url, {headers, responseType: 'text' as 'json'});
  }
}
