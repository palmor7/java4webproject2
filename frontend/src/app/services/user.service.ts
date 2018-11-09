import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { user } from '../models/userModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl:string = 'http://localhost:8080';
 constructor(private http: HttpClient) { }
 
 login(user: user){
 	localStorage.setItem('token', 'true');
 	let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.baseUrl +'/register', JSON.stringify(user),{headers});
 }

  register(user: user){
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.baseUrl +'/register', JSON.stringify(user),{headers});
  }
}
