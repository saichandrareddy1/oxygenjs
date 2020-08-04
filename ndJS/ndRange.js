

/** ndRange is function which creates the multi dimentional 
 * matrix and will add the number in some range here shape is the 
 * mutidimentional shape, [#rows, #columns]
 * columns will form the range of the matrix
 * 
 * for example we are passing shape with [3, 4]
 * 3 says about the rows and 4 says about the column
 * and the range will be from  0, 1, 2, 3
 */


function ndRange(shape=[]){
    var random_array = new Array()
    if(shape[0] === 0 && shape[1] > 0){
        console.log("Asking About 1D array")
        for(var i=0; i == shape[0]; i++){
            for(var j=0; j<= shape[1]-1; j++){
                random_array.push(j)
            }
        }   
        return random_array
        }else if (shape[0] >= 1){
            for(var i=0; i <= shape[0]-1; i++){
                random_array.push([])
                for(var j=0; j<= shape[1]-1; j++){
                    random_array[i].push(j)
                }
            }
            return random_array
        }
        else{
            console.log(`Hey some went wrong with shape = [${shape}] !!!`)
        }   
}

export {ndRange}
// var a = ndRange([0, 10])
// console.log(a)