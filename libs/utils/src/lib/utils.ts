import { sampleFiles } from "./setting-options";

export function sortWithIndices(toSort, isFinalLayer = false) {
    const indexedTest = toSort.map(function(e,i){return {ind: i, val: e}});
    const genreOrder = sampleFiles;
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
    return out;
}