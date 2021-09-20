import { Component, Input, OnInit } from '@angular/core';
import { S3Service } from '../../core/s3.service';
import { ViewingState } from './img-viewer/img-viewer.interface';

@Component({
  selector: 'somaf-ws-conv-layer',
  templateUrl: './conv-layer.component.html',
  styleUrls: ['./conv-layer.component.scss']
})
export class ConvLayerComponent implements OnInit {
  @Input() title!: string;
  @Input() layer!: string;
  @Input() bgColor!: string;

  baseUrl = '';
  status: ViewingState = 'static';

  constructor(private readonly s3: S3Service) { }

  ngOnInit(): void {
    this.baseUrl = this.s3.getSampleResultsUrl(); 
  }
  toggleStatus(): void {
    this.status = this.status === 'static' ? 'viewing' : 'static'
  }
}
