import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiUrl = 'http://127.0.0.1:8000/api'; // URL del backend Laravel

  constructor(private http: HttpClient) { }

  getTest(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/test`);
  }

}
