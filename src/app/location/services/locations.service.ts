import { Ambiente } from './../model/ambiente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private readonly API = 'http://localhost:8080/api/v1/ambiente'
  //private params = new HttpParams().set("login", "mestre").set("senha","masterkey");

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Ambiente[]>(this.API)
    .pipe(
      first()
    );
  }
}
