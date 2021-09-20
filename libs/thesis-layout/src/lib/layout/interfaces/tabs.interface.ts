export interface ITab {
    title: string;
    type: TabType;
    selected: boolean;
    class?: string;
}
export type TabType = 'about'| 'baseline' | 'tp' | 'augerino' | 'augs';
