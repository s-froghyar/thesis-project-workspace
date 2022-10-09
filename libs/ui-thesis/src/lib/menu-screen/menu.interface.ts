export type TabType = 'about' | 'baseline' | 'tp' | 'augerino' | 'augs';

export interface ITab {
  title: string;
  selected: boolean;
  type: TabType;
}
