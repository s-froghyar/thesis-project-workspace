import { SettingOption } from './interfaces/setting-option.interface';



export const modelOptions: SettingOption[] = [
    {name: 'NO AUGMENTATION', selected: false, id: 'no_aug'},
    {name: 'DATA AUGMENTATION', selected: false, id: 'segmented'},
    {name: 'TANGENT PROPAGATION', selected: false, id: 'tp'},
    {name: 'AUGERINO', selected: false, id: 'augerino'},
];
export const transformOptions: SettingOption[] = [
    {name: 'GAUSSIAN NOISE', selected: false, id: 'NI'},
    {name: 'PITCH SHIFT', selected: false, id: 'PS'},
];
export const sampleFiles: SettingOption[] = [
    { name: 'BLUES', selected: false, id: 'blues' },
    { name: 'CLASSICAL', selected: false, id: 'classical' },
    { name: 'COUNTRY', selected: false, id: 'country' },
    { name: 'DISCO', selected: false, id: 'disco' },
    { name: 'HIPHOP', selected: false, id: 'hiphop'},
    { name: 'JAZZ', selected: false, id: 'jazz' },
    { name: 'METAL', selected: false, id: 'metal'},
    { name: 'POP', selected: false, id: 'pop'},
    { name: 'REGGAE', selected: false, id: 'reggae'},
    { name: 'ROCK', selected: false, id: 'rock' },
];
