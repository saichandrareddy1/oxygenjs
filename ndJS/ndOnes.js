function ndOnes(shape=[]){
    var random_array = new Array()
    if(shape[0] === 0 && shape[1] > 0){
        console.log("Asking About 1D array")
        for(var i=0; i == shape[0]; i++){
            for(var j=0; j<= shape[1]-1; j++){
                random_array.push(1)
            }
        }   
        return random_array
        }else if (shape[0] >= 1 && shape[1] > 0){
            for(var i=0; i <= shape[0]-1; i++){
                random_array.push([])
                for(var j=0; j<= shape[1]-1; j++){
                    random_array[i].push(1)
                }
            }
            return random_array
        }
        else{
            console.log(`Hey some went wrong with shape = [${shape}] !!!`)
        }
}
// var array = ndOnes([5, 0])
// console.log(array)

export {ndOnes}