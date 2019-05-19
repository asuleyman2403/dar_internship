import { EventEmitter, Injectable } from '@angular/core';
import {TaskList, Task, Token} from '../models/models';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MainService} from './main.service';
@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {
  constructor(http: HttpClient) {
    super(http);
  }

  login(usernamE: string, passworD: string): Promise<Token> {
    return this.post('http://localhost:8000/api/login/', {
      username: usernamE,
      password: passworD
    });
  }

  getTaskLists(): Promise<any> {
    return this.get('http://localhost:8000/api/task_lists/', {});
  }

}
