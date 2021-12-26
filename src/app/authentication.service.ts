import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


export class User{
  constructor(
    public status:string,
     ) {}
  
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http : HttpClient
    ) { 
      
    }


  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<User>('http://localhost:8081/employee/validateLogin',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        return userData;
       }
     )

    );
  }

  // authenticate(username, password) {
  //   if (username === "admin" && password === "admin") {
  //     sessionStorage.setItem('username', username)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
