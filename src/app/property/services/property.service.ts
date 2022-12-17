import { Property } from './../model/property';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private readonly API = 'http://localhost:8080/api/v1/ambiente'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Property[]>(this.API)
    .pipe(
      first()
    );
  }
}
