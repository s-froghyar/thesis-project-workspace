import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, Observable, of, take, tap, throwError } from 'rxjs';

interface CustomFileBody {
  customFile: File;
  model: string;
  transform: string;
}

interface SampleFileBody {
  sampleFile: string;
  model: string;
  transform: string;
}

@Injectable()
export class ModelSelectionService {
  constructor(private httpClient: HttpClient) {}

  selectCustomModel(body: CustomFileBody): Observable<any> {
    const formData = new FormData();

    formData.append('model', body.model);
    formData.append('transform', body.transform);
    formData.append('customSong', body.customFile);

    return this.httpClient
      .post('http://0.0.0.0:9090/custom', formData, {
        // reportProgress: true,
        // observe: 'events',
      })
      .pipe(catchError(this.errorMgmt));
  }

  selectSampleModel(body: SampleFileBody): Observable<string> {
    // Grab the images from the sample s3 bucket
    return of(null).pipe(
      delay(500),
      take(1),
      tap((res: any) => {
        console.log(res, body);
      })
    );
  }

  private errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
