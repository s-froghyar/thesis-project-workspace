import { SettingOption } from './settings.types';

export interface ModelState {
  model: SettingOption;
  sampleFile: SettingOption;
  transform: SettingOption;
}

export type Genre = 'BLUES' | 'CLASSICAL' | 'COUNTRY' | 'DISCO' | 'HIPHOP' | 'JAZZ' | 'METAL' | 'POP' | 'REGGAE' | 'ROCK';

export interface Neuron {
    compareValue: number;
    displayValue: string;
    genreName: Genre;
    opacity: number;
}

export interface ModelNeurons {
    fc1: Neuron[];
    fc2: Neuron[];
    sum: Neuron[];
}