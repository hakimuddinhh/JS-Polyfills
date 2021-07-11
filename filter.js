Array.prototype.myFilter = function(cb) {
    const targetArray = this;
    const modifiedArray = [];
    for(let i=0; i<targetArray.length; i++){
        const shouldStay = cb(targetArray[i], i, targetArray);
        if(shouldStay) {
           modifiedArray.push(targetArray[i]);
        }
        
    }

    return modifiedArray;
    
}