function replaceWithYerr(array, startIndex, deleteCount){
    let newArray = [...array] //make a copy of the OG array
    if(startIndex === undefined && deleteCount === undefined){
        //replace all elements in newArray with yerr
        for(let i = 0; i < newArray.length; i++){
            newArray[i] = 'yerr'
        }
    } else if(deleteCount === undefined){
        //replace all elements in newArray starting at startIndex
        for(let i = startIndex; i < newArray.length; i++){
            newArray[i] = 'yerr'
        }
    } else {
        //then I have 3 arguments
        for(let i = startIndex; i < deleteCount + startIndex; i++){
            newArray[i] = 'yerr'
        }
    }

    return newArray
}