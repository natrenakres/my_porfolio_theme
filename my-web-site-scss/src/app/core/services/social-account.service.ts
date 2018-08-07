import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocialAccountService {

  constructor(private http: HttpClient) { }

  getSocialAccounts(): Observable<any[]> {
    return this.http.get<any[]>('./api/social-links-data.json');
  }
}
