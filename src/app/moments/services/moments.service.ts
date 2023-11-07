import { environment } from './../../../environments/environment.dev';
import { Moment } from './../../models/moment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/models/response';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MomentsService {

  constructor(private http: HttpClient) { }

  public insertMoment(moment: FormData): Observable<Response<Moment|null>> {

    if( !(moment.get('imagem') instanceof File) ) {
      moment.delete('imagem');
    }
    const url = `${environment.baseApiUrl}moments`;
    return this.http.post<Response<Moment|null>>(url, moment).pipe(take(1));
  }

}
