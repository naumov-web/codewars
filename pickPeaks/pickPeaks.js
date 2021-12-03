function pickPeaks(array) {
    const result = {pos: [], peaks: []};
    let lastPeakValue = null;
    let lastPeakIndex = null;

    for(let i = 0, len = array.length; i < len; i++) {
        let value = array[i];

        if (array[i - 1] < array[i]) {
            lastPeakValue = array[i];
            lastPeakIndex = i;
        }

        if (array[i] > array[i + 1] && lastPeakIndex !== null) {
            result.pos.push(lastPeakIndex);
            result.peaks.push(lastPeakValue);

            lastPeakIndex = null;
        }
    }

    return result;
}

console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
console.log(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]});
console.log(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]});
console.log(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]});
console.log(pickPeaks([]),{pos:[],peaks:[]});
console.log(pickPeaks([1,1,1,1]),{pos:[],peaks:[]});