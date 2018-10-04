import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  loginUser(data): Observable<boolean> {
    //return this.http.post<boolean>("http://localhost:8080/users", data, {
    return this.http.post<boolean>("https://mascotas.ga/application/usuarios/login", data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
