import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Urls} from "../utils/urls";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  getData(subject: string): Observable<any> {
    return this.http.get(`${Urls.dashboard}?subject=${subject}`)
  }
}
