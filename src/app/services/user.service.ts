import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const API_URL = 'https://randomuser.me/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public getUsers(page:number):Observable<any> {
    let ObservableofUsers:Observable<any> = this.httpClient.get<any>(API_URL+'/?page='+page+'&results=10&seed=ab&inc=id,name,email,dob,picture,gender,login,location');
    return ObservableofUsers;
  }

}
