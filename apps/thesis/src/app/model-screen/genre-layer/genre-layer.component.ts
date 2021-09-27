import { Component, Input } from '@angular/core';
import { findMaxThreeNeurons } from '@somaf-ws/utils';

@Component({
  selector: 'somaf-ws-genre-layer',
  templateUrl: './genre-layer.component.html',
  styleUrls: ['./genre-layer.component.scss']
})
export class GenreLayerComponent {
  @Input() isSum = false;

  @Input() set neurons(v) {  
    let currentMaxInd = 0;
    let currentMaxVal = 0;
    
    this._neurons = v.map((el, ind) => {
      if (el.compareValue > currentMaxVal) {
        currentMaxInd = ind;
        currentMaxVal = el.compareValue;
      }
      return this.isSum ? {
          ...el,
          displayValue: (el.compareValue * 10).toFixed(2).toString(),
          styleValue: (el.compareValue * 10).toFixed(2).toString() + '%'
        }
        : {
          ...el,
          displayValue: (el.compareValue * 100).toFixed(2).toString() + '%',
          styleValue: (el.compareValue * 100).toFixed(2).toString() + '%'
        };
    });

    this.topThree = this.isSum ? findMaxThreeNeurons(Array.from(this._neurons)) : [];
    this.maxInd = currentMaxInd;
  };

  get neurons() {
    return this._neurons;
  }

  maxInd = 0;
  topThree;
  private _neurons;
  


}
