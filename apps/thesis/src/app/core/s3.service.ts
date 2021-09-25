import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { sortWithIndices } from "@somaf-ws/utils";
import { combineLatest, Observable, throwError } from "rxjs";
import { catchError, first, map } from "rxjs/operators";




@Injectable({
    providedIn: 'root'
  })
export class S3Service {
    private _sampleUrl!: string;
    private _state;

    get state() {
        return this._state;
    }
    set state(v) {
        this._state = v;
    }

    constructor(private readonly http: HttpClient) {}


    initModel(): boolean {
        if (!this._sampleUrl) {
            const choices = JSON.parse(sessionStorage.getItem('model_options') as string) ?? {};
            this.setModelChoices(choices);
            return choices?.model ? true : false;
        }
        return true;
    }

    getSampleResultsUrl(): string {
        return this._sampleUrl;
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

    setModelChoices(choices): void {
        const root = 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/sample_results';
        this._sampleUrl = choices.model.id === 'no_aug'
            ? `${root}/${choices.sampleFile.id}_no_aug`
            : `${root}/${choices.sampleFile.id}_${choices.model.id}_${choices.transform.id}`;
        sessionStorage.setItem('model_options', JSON.stringify(choices));
        this.state = Object.assign({}, choices);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error("An error occurred:", error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` + `body was: ${error.error}`
          );
        }
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