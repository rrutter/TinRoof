import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpEvent} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

const servicesAPI = environment.SERVICES;

@Injectable()
export class AlbumService
{
  constructor(private http: HttpClient)
  {

  }

  public getAlbums(id: number, index: number, count: number): Observable<any>
  {
    return this.http.get<any>(servicesAPI + 'albums?userId='+id).map(this.handleAlbums).catch(this.handleError);
  }

  private handleAlbums(data)
  {
    return data;
  }

  private handleError(error): Observable<any>
  {
    console.error(error);
    return error;
  }

}
