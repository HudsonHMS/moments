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
  private url = `${environment.baseApiUrl}moments`;

  constructor(private http: HttpClient) { }

  public insertMoment(moment: FormData): Observable<Response<Moment|null>> {

    if( !(moment.get('imagem') instanceof File) ) {
      moment.delete('imagem');
    }
    return this.http.post<Response<Moment|null>>(this.url, moment).pipe(take(1));
  }

  public getMoments(): Observable<Response<Moment[]>> | null {
    try {
      return this.http.get<Response<Moment[]>>(`${this.url}`).pipe( take(1) );
    } catch ( err ) {
      return null;
    }
  }

  public getMoment( id: number ): Observable<Response<Moment>> | null {
    try {
      return this.http.get<Response<Moment>>(`${this.url}/${id}`).pipe( take(1) );
    } catch ( err ) {
      return null;
    }
  }

}
