import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthBackendService {
  private http = inject(HttpClient);

  login(credentials: { email: string; password: string }): Observable<any> {
    return of(credentials).pipe(delay(2000));
  }
  register(credentials: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    return of(credentials).pipe(delay(2000));
  }
}
