import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private workUrl = './api/work-data.json';

  constructor(private http: HttpClient) { }

  getWorks() : Observable<Work[]> {
    return this.http.get<Work[]>(this.workUrl);
  }
}
