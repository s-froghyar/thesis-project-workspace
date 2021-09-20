import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
@Injectable({
    providedIn: 'root'
  })
export class S3Service {
    constructor(private readonly http: HttpClient) {}
    getSampleResultsUrl(): string {
        return 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/sample_results/blues_augerino_ni';
    }
    getStaticUrl(): string {
        return 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static';
    }
    getFc1Neurons(): Observable<Response> {
        return this.http.get(`${this.getSampleResultsUrl()}/fc.json`).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }
    // getSignedUrl(): void {
        
    //     this.http.get('http://localhost:3333/api/s3', {responseType: 'text'}).subscribe(response => {
    //         console.log(response);
    //     });
    // }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error("An error occurred:", error.error.message);
        } else {
          // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` + `body was: ${error.error}`
          );
        }
        // return an observable with a user-facing error message
        return throwError(error);
    }
    private extractData(res: any): Response {
        let body = res;
        return body || {};
      }
    
}