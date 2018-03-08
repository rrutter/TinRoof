import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

const servicesAPI = environment.SERVICES;

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  public getPhotos(albumId: number): Observable<any>
  {
    return this.http.get<any>(servicesAPI + 'photos?albumId='+albumId).map(this.handlePhotos).catch(this.handleError);
  }

  private handlePhotos(data)
  {
    return data;
  }

  private handleError(error): Observable<any>
  {
    console.error(error);
    return error;
  }

}
