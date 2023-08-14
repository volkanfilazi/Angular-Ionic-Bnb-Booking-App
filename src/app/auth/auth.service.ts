import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, take, tap } from 'rxjs';
import { User } from './user.model';
import { AuthPage } from './auth.page';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _checkAuth = new BehaviorSubject<boolean>(false);
  private _Users = new BehaviorSubject<User[]>([
    {
      userId: Math.random().toString(),
      firstName: 'volkan',
      lastName: 'filazi',
      email: 'admin@hotmail.com',
      password: 'admin91',
      phonenumber: 12345678
    }
  ])

  get Users() {
    return this._Users.asObservable();
  }

  get checkAuth() {
    return this._checkAuth.asObservable();
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
    this.Users.pipe(
      map(users => {
        users.find(p => {
          if(p.email === email && p.password === password) {
            this._checkAuth.next(true);
            this._userIsAuthenticated = true
            console.log("service",this.checkAuth);
          }else {
            this._checkAuth.next(false) 
          }
        });
      })
    ).subscribe();
  }

  logout() {
    this._userIsAuthenticated = false
  }

  register(firstName:string, lastName: string, email: string, password: string, phonenumber: number) {
    const newUser: User = {
      userId: Math.random().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phonenumber: phonenumber
    };
    this.Users.pipe(take(1), delay(1000), tap(p => {
      this._Users.next(p.concat(newUser))
    }));
  }
}
