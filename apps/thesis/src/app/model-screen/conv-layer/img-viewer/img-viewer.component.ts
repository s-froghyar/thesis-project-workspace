import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ViewingState } from './img-viewer.interface';

@Component({
  selector: 'somaf-ws-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss']
})
export class ImgViewerComponent implements OnInit {
  @Input() baseUrl!: string;
  @Input() layer!: string;
  @Input() status: ViewingState = 'static';

  chevDown = faChevronDown;

  _currentSpec = 0;
  get currentSpec(): number {
    return this._currentSpec;
  }
  set currentSpec(ind: number) {
    this._currentSpec = ind;
  }
  dimensions!: string;
  currentUrl;
  prevUrl;
  nextUrl;
  ngOnInit(): void {
    this.initUrls();
    switch (this.layer) {
      case 'in':
        this.dimensions = '(128x79)';
        break;
      case 'conv1':
        this.dimensions = '(64x38)';
        break;
      case 'conv2':
        this.dimensions = '(32x18)';
        break;
    }
  }
  initUrls(): void {
    if (this.layer === 'in') {
      this.currentUrl = `${this.baseUrl}/in.jpg`;
      this.prevUrl = '';
      this.nextUrl = '';
    } else {
      this.updateUrls()
    }
  }
  toggleState(): void {
    this.status = this.status === 'static' ? 'viewing' : 'static'
  }
  updateUrls(step = 0): void {
    this._currentSpec += step 

    const urlInd = this.getUrlIndices();
    const canPrev = urlInd['prev'] !== -1
    const canNext = urlInd['next'] !== -1
    
    this.currentUrl = `${this.baseUrl}/${this.layer}/${urlInd['curr']}.jpg`;
    this.prevUrl = canPrev ? `${this.baseUrl}/${this.layer}/${urlInd['prev']}.jpg` : '';
    this.nextUrl = canNext ? `${this.baseUrl}/${this.layer}/${urlInd['next']}.jpg` : '';
  }
  private getUrlIndices() {
    if (this.currentSpec === 0) {
      return { prev: -1, curr: 0, next: 1 }
    } else if (this.currentSpec === 63) {
      return { prev: 62, curr: 63, next: -1 }
    }
    return { prev: this.currentSpec -1, curr: this.currentSpec, next: this.currentSpec + 1 }
  }
}
