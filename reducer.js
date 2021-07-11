Array.prototype.myReducer = function(reducer, accumulator) {
    const arrayValue = this;
    let initialValue = accumulator;
    let sumValue;
    for (let i=0; i<arrayValue.length; i++) {
        const first = i===0 && initialValue ? accumulator : sumValue || arrayValue[i];
        const second = i===0 && initialValue || initialValue ? arrayValue[i] : arrayValue[i+1];
        const result = reducer(first, second);
        sumValue = result;
    }

    return sumValue;

}