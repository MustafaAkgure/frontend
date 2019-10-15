import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

  private requestURL: string = environment.baseURL + '/users';

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<User[]>(this.requestURL);
  }

  public save(user: User) {
    return this.http.post<User>(this.requestURL, user);
  }
}
