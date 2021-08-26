export interface Color {
    red?: number;
    green?: number;
    blue?: number;
    hue?: number;
    saturation?: number;
    light?: number;
}
export interface ColorHarmony {
    type: string;
    base: Color;
    secondary: Color;
    tertiary?: Color;
    fourth?: Color;
    fifth?: Color;
}