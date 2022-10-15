export type HarmonyType = 'analogous' | 'tetradic' | 'split-complementary' | 'triadic' | 'complementary' | null;
export interface Color {
    red?: number;
    green?: number;
    blue?: number;
    hue?: number;
    saturation?: number;
    light?: number;
}
export interface ColorHarmony {
    type: HarmonyType;
    base: Color;
    secondary: Color;
    tertiary?: Color;
    fourth?: Color;
    fifth?: Color;
}

export type ColorHamronyFields = 'base' | 'secondary' | 'tertiary' | 'fourth' | 'fifth';