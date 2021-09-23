import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { sampleFiles } from "@somaf-ws/utils";
import { combineLatest, Observable, throwError } from "rxjs";
import { catchError, first, map } from "rxjs/operators";

function sortWithIndices(toSort, isFinalLayer = false) {
    const indexedTest = toSort.map(function(e,i){return {ind: i, val: e}});
    const genreOrder = sampleFiles;
    indexedTest.sort((x, y) => x.val > y.val ? 1 : x.val == y.val ? 0 : -1);
    console.log(indexedTest);
    
    const out = new Array(10);

    let opValue = 0.3;
    indexedTest.forEach((el, i) => {
        const strVal = el.val.toString();

        const displayValue = isFinalLayer 
            ? (el.val * 10).toFixed(2)
            : `${strVal[0]}.${strVal.slice(-2)}`;
        out[el.ind] = {
            displayValue,
            compareValue: el.val,
            opacity: opValue,
            genreName: genreOrder[el.ind].name
        }

        opValue += 0.05;
    });
    return out;
}


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
    getFcNeurons(): Observable<Response> {
        return combineLatest([
                this.http.get(`${this.getSampleResultsUrl()}/fc.json`),
                this.http.get(`${this.getSampleResultsUrl()}/final_result.json`)]
            ).pipe(
                first(),
                map(this.extractData),
                catchError(this.handleError)
            );
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error("An error occurred:", error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` + `body was: ${error.error}`
          );
        }
        // return an observable with a user-facing error message
        return throwError(error);
    }
    private extractData(res: any): any {
        let fc1 = res[0]['fc1'];
        let fc2 = res[0]['fc2'];
        let sum = res[1]['sum_rule_res'].map(el => parseFloat(el + '0'));
        for (let ind=0; ind < 10; ind++) {
            fc1[ind] = parseInt(fc1[ind].split('.').join(''));
            fc2[ind] = parseFloat(fc2[ind]);
        }
        fc1 = sortWithIndices(fc1);
        fc2 = sortWithIndices(fc2, true);
        sum = sortWithIndices(sum, true);
        
        return { fc1, fc2, sum };
      }    
}