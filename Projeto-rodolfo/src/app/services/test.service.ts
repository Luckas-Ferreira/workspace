import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = ''
  constructor(private http: HttpClient) { }


  fun(): Observable<any>{
    return this.http.get<any>(this.url)
  }
}
