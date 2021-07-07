import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44331/api/';
  constructor(private httpClient:HttpClient) { }
  login(loginModel:LoginModel){
    let newPath=this.apiUrl+"login"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel)
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    localStorage.removeItem("user")
  }
}
