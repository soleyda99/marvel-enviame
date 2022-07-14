import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {
  Result,
  Welcome,
} from 'src/app/components/characters/models/character';

@Injectable({
  providedIn: 'root',
})
export class ServicesSharedService {
  private sharingObservablePrivate: BehaviorSubject<Result[]> =
    new BehaviorSubject([
      {
        name: '',
        description: '',
        thumbnail: { extension: '', path: '' },
        modified: '',
      },
    ]);

  constructor(private http: HttpClient) {}

  search(name: string): Observable<Result[]> {
    return this.http
      .get<Welcome>(
        `${environment.path}?ts=${environment.ts}&apikey=${environment.apiKey}&hash=${environment.hash}&nameStartsWith=` +
          name
      )
      .pipe(map((res) => res.data.results));
  }

  get sharingObservable() {
    return this.sharingObservablePrivate.asObservable();
  }
  set sharingObservableData(data: Result[]) {
    this.sharingObservablePrivate.next(data);
  }
}
