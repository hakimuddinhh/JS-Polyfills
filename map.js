Array.prototype.myMap = function(cb) {
    const targetArray = this;
    const modifiedArray = [];
    for(let i=0; i<targetArray.length; i++){
        const modifiedIndex = cb(targetArray[i], i, targetArray);
        modifiedArray.push(modifiedIndex || targetArray[i]);
    }

    return modifiedArray;
    
}