import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { HomeLocation } from '../homeLocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private apiUrl = environment.apiUrl;
  private userApi = environment.userApiUrl;

  constructor(private http: HttpClient) { }

  getHomeLocation() : Observable<HomeLocation[]>{
    return this.http.get<HomeLocation[]>(this.apiUrl);
  }

  getUser() : Observable<any>{
    return this.http.get<any>(`${environment.userApiUrl}`);
  }

  getHomeLocationById(id : number) : Observable<HomeLocation>{
    return this.http.get<HomeLocation>(`${this.apiUrl}/${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  createUser(newUser: any): Observable<any> {
    return this.http.post(`${this.userApi}`, newUser);
  }



}
