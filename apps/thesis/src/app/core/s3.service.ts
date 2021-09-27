/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SettingOption, sortWithIndices, ModelState, AudioMetadata, ModelNeurons } from "@somaf-ws/utils";
import { combineLatest, Observable, throwError } from "rxjs";
import { catchError, first, map } from "rxjs/operators";



@Injectable({
    providedIn: 'root'
  })
export class S3Service {
    private _root = 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static';
    private _sampleUrl!: string;
    private _state!: ModelState;

    get state(): ModelState {
        return this._state;
    }
    set state(v: ModelState) {
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
    getSampleAudioMetadata(): AudioMetadata {
        return {
            title: this.state.sampleFile.name,
            url: `${this._root}/samples/mp3/${this.state.sampleFile.id}.00000.mp3`
        };
    }

    getFcNeurons(): Observable<ModelNeurons> {
        return combineLatest([
                this.http.get(`${this.getSampleResultsUrl()}/fc.json`),
                this.http.get(`${this.getSampleResultsUrl()}/final_result.json`)]
            ).pipe(
                map(this.extractData),
                first(),
                catchError(this.handleError)
            );
    }

    setModelChoices(choices): void {
        this._sampleUrl = choices.model.id === 'no_aug'
            ? `${this._root}/sample_results/${choices.sampleFile.id}_no_aug`
            : `${this._root}/sample_results/${choices.sampleFile.id}_${choices.model.id}_${choices.transform.id}`;
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
    private extractData(res: any): ModelNeurons {
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
        console.log({ fc1, fc2, sum });
        return { fc1, fc2, sum };
      }    
}