import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiajaxService {

  constructor(private http: HttpClient) { }

  llamaAjax(url: string): Observable<any> {
    return this.http.get(url)
  }

}

