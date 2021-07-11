Array.prototype.myFlat = function(depth) {
    const targetArray = this;
    const modifiedArray = [];
    let deplthTracker = 1;
    
    const flatten = (arr) => {
            for(let i=0; i<arr.length; i++){
                const currentItem = arr[i];
                if(Array.isArray(currentItem) && deplthTracker <= depth) {
                    if(depth) deplthTracker++;
                    flatten(currentItem);
       
                } else {
                    modifiedArray.push(currentItem);
                }
            }
            if(depth && deplthTracker > 0) deplthTracker--;
    }

    flatten(targetArray);

    return modifiedArray;
    
}