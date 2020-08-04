function ndSearch(array, valuetosearch, dimentions=false) {
    if(valuetosearch){
        if (dimentions===false) {
            for(var i =0; i<array.length; i++){
                if(array[i] === valuetosearch){
                    console.log(i)
                    break
                }
            }
        }
        if(dimentions===true){
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[0].length; j++) {
                    if(valuetosearch === array[i][j]){
                        console.log(`The value is a row and column [${i}][${j}]`)
                    }
                }
            }
        }
    }else{
        console.log(`Valueerror : No number ${valuetosearch} is in the array`)
    }
}

// ndSearch([[2, 4], [2,3], [4, 5, 5]], 5, true)

export {ndSearch}