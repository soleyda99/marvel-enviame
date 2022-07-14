import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result, Welcome } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  isLoading = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getCharacters(offset: number): Observable<Result[]> {
    return this.http
      .get<Welcome>(
        `${environment.path}?ts=${environment.ts}&apikey=${environment.apiKey}&limit=100&hash=${environment.hash}&offset=` +
          offset
      )
      .pipe(map((res) => res.data.results));
  }

  onSpinner(): void {
    this.isLoading.next(true);
  }

  offSpinner(): void {
    this.isLoading.next(false);
  }
}
