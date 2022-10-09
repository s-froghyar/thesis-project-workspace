/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { AudioMetadata, StreamState } from './audio-player.interface';
import { AudioPlayerService } from './audio-player.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'thesis-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  providers: [AudioPlayerService],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSliderModule],
})
export class AudioPlayerComponent implements OnInit {
  @Input() set meta(v: AudioMetadata) {
    this._meta = v;
    this.service.stop();
    this.playStream(v.url);
  }
  get meta(): AudioMetadata {
    return this._meta;
  }
  private _meta!: AudioMetadata;

  files: Array<any> = [];
  state$!: Observable<StreamState>;

  // playIcon = faPlay;
  // pauseIcon = faPause;
  // refreshIcon = faSync;

  isPlaying = false;
  constructor(private readonly service: AudioPlayerService) {}

  ngOnInit(): void {
    this.state$ = this.service.getState();
  }
  playStream(url: any) {
    this.service.playStream(url).subscribe();
  }
  stop() {
    this.service.stop();
  }
  onSliderChangeEnd(change: any) {
    this.service.seekTo(change.value);
  }
  togglePlay(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    this.isPlaying = !this.isPlaying;
  }
  private play() {
    this.service.play();
  }

  private pause() {
    this.service.pause();
  }
}
