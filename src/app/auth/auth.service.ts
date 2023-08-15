import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, take, tap } from 'rxjs';
import { User } from './user.model';
import { AuthPage } from './auth.page';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _checkAuth = false;
  private _loginErrorMessage = new BehaviorSubject<string>('');
  private _localUsers = <User[]>[]

  localUsersTrigger() {
    const test = localStorage.getItem("userList")
    if (test) {
      const test2 = JSON.parse(test)
      this._localUsers = test2
    }
  }

  get localUsers() {

    return this._localUsers;
  }
  get checkAuth() {
    return this._checkAuth;
  }

  get loginErrorMessage() {
    return this._loginErrorMessage.asObservable();
  }

  private _userIsAuthenticated = false
  private _userId = 'u2'

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId
  }
  constructor() { }

  login(email: string, password: string) {
    this.localUsersTrigger();
    this.localUsers.find(p => {
      console.log("test");
      
      if (p.email === email && p.password === password) {
        this._checkAuth = true
        console.log("hey",this.checkAuth);
        
        this._userIsAuthenticated = true
      }else {
        this._checkAuth = false
      }
    })
  }

  logout() {
    this._userIsAuthenticated = false
  }

  register(firstName: string, lastName: string, email: string, password: string, phonenumber: number) {

    const newUser: User = {
      userId: Math.random().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phonenumber: phonenumber
    };
    this.localUsers.push(newUser)
    // this.Users.pipe(take(1), delay(1000), tap(p => {
    //   this._Users.next(p.concat(newUser))
    // }));
    let userlist = JSON.stringify(this.localUsers)
    localStorage.setItem("userList", userlist)
    this.localUsersTrigger()


  }
}
