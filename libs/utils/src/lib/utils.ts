/* eslint-disable @typescript-eslint/no-explicit-any */
import { SettingOption } from "..";
import { Neuron } from "./interfaces/neurons.interface";
import { sampleFiles } from "./setting-options";

export function sortWithIndices(toSort: any[], isFinalLayer = false): Neuron[] {
    const indexedTest = toSort.map((e: any, i: number) => { return { ind: i, val: e }});
    const genreOrder: SettingOption[] = sampleFiles;
    indexedTest.sort((x, y) => x.val > y.val ? 1 : x.val == y.val ? 0 : -1);
    
    const out = new Array(10);

    let opValue = 0.3;
    indexedTest.forEach((el, i) => {
        const strVal = el.val.toString();

        const displayValue = isFinalLayer 
            ? (el.val * 10).toFixed(2)
            : `${strVal[0]}.${strVal.slice(-2)}`;
        out[el.ind] = {
            displayValue,
            compareValue: el.val,
            opacity: opValue,
            genreName: genreOrder[el.ind].name
        }
        opValue += 0.05;
    });
    return out as Neuron[];
}

export function findMaxThreeNeurons(inp: any[]): any[] {
    return inp.sort((a: Neuron, b: Neuron) => a.compareValue < b.compareValue ? 1 : a.compareValue > b.compareValue 
                                            ? -1 : 0).slice(0, 3);
    
}

export const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};
