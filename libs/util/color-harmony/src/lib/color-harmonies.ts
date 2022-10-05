/* eslint-disable @typescript-eslint/no-var-requires */
import { Color, ColorHarmony, HarmonyType } from "./interfaces/colors.interface";
declare function require(name:string): any;
const convert = require('color-convert');



const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function complementaryColor(base: Color): ColorHarmony {
    return {
        type: 'complementary',
        base,
        secondary: {...base, hue: (((base?.hue ?? 1) + 180) % 360)}
    };
};

function triadicColor(base: Color): ColorHarmony {
    return {
        type: 'triadic',
        base,
        secondary: {...base, hue: (((base?.hue ?? 1) + 120) % 360)},
        tertiary: {...base, hue: ((base?.hue ?? 1) + 240) % 360}
    };
};

function splitComplementaryColor(base: Color): ColorHarmony {
    return {
        type: 'split-complementary',
        base,
        secondary: {...base, hue: (((base?.hue ?? 1) + 150) % 360)},
        tertiary: {...base, hue: ((base?.hue ?? 1) + 210) % 360}
    };
};

function tetradicColor(base: Color): ColorHarmony {
    return {
        type: 'tetradic',
        base,
        secondary: {...base, hue: (((base?.hue ?? 1) + 60) % 360)},
        tertiary: {...base, hue: ((base?.hue ?? 1) + 180) % 360},
        fourth: {...base, hue: ((base?.hue ?? 1) + 240) % 360}
    };
};

function analogousColor(base: Color): ColorHarmony {
    return {
        type: 'analogous',
        base,
        secondary: {...base, hue: (((base?.hue ?? 1) + 30) % 360)},
        tertiary: {...base, hue: ((base?.hue ?? 1) - 30) % 360},
    };
};




export function colorHarmonies(type: HarmonyType): ColorHarmony | null {
    if (!type) return null;

    const harmonies = {
        'analogous': analogousColor,
        'tetradic': tetradicColor,
        'split-complementary': splitComplementaryColor,
        'triadic': triadicColor,
        'complementary': complementaryColor
    }
    const randomColor: Color = {
        red: randomInteger(0, 255),
        green: randomInteger(0, 255),
        blue: randomInteger(0, 255),
    }
    const hsl = convert.rgb.hsl(randomColor.red, randomColor.green, randomColor.blue);

    return harmonies[type]({hue: hsl[0], saturation: hsl[1], light: hsl[2]})
}

export function colorHarmoniesWithBase(type: HarmonyType, baseColor: Color): ColorHarmony | null {
    if (!type) return null;
    const harmonies = {
        'analogous': analogousColor,
        'tetradic': tetradicColor,
        'split-complementary': splitComplementaryColor,
        'triadic': triadicColor,
        'complementary': complementaryColor
    }

    return harmonies[type](baseColor)
}

export const backUpHarmony: ColorHarmony = {
    type: 'analogous',
    base: {
        hue: 189,
        light: 42,
        saturation: 48
    },
    secondary: {
        hue: 219,
        light: 42,
        saturation: 48
    },
    tertiary: {
        hue: 159,
        light: 42,
        saturation: 48
    }
}