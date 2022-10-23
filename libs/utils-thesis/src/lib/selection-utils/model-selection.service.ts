import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of, take, tap } from 'rxjs';

@Injectable()
export class ModelSelectionService {
  constructor(private httpClient: HttpClient) {}

  selectModel(options: any): Observable<any> {
    return of(null).pipe(delay(500), take(1), tap((res: any) => {
        console.log(res, options);
    }));
  }
}
