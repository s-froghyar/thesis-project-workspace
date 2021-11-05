/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { faPause, faPlay, faSync } from '@fortawesome/free-solid-svg-icons';
import { AudioMetadata, StreamState } from '@somaf-ws/utils';
import { first } from 'rxjs/operators';
import { AudioPlayerService } from './audio-player.service';

@Component({
  selector: 'thesis-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  providers: [AudioPlayerService]
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
  state!: StreamState;

  playIcon = faPlay;
  pauseIcon = faPause;
  refreshIcon = faSync;

  isPlaying = false;
  constructor(private readonly service: AudioPlayerService) {}

  ngOnInit(): void {
    this.service.getState().subscribe(state => {      
      this.state = state;
    });
  }
  playStream(url) {
    this.service.playStream(url).subscribe();
  }
  stop() {
    this.service.stop();
  }
  onSliderChangeEnd(change) {
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
