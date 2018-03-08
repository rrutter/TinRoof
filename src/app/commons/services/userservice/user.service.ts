import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpEvent} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

const servicesAPI = environment.SERVICES;

@Injectable()
export class UserService
{
  constructor(private http: HttpClient)
  {

  }

  public getUsers(): Observable<any>
  {
    return this.http.get<any>(servicesAPI + 'users').map(this.handleUsers);
  }

  private handleUsers(data)
  {
    return data;
  }

}
