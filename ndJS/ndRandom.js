
import Math from 'mathjs'

function ndArray(range_min, range_max, shape=[]){
    var random_array = new Array()
    if(shape[0] === 0 && shape[1] > 0){
        console.log("Asking About 1D array")
        for(var i=0; i == shape[0]; i++){
            for(var j=0; j<= shape[1]-1; j++){
                random_array.push(Math.random(range_min, range_max))
            }
        }   
        return random_array
        }else if (shape[0] >= 1){
            for(var i=0; i <= shape[0]-1; i++){
                random_array.push([])
                for(var j=0; j<= shape[1]-1; j++){
                    random_array[i].push(Math.random(range_min, range_max))
                }
            }
            return random_array
        }
        else{
            console.log(`Hey some went wrong with shape = [${shape}] !!!`)
        }   
    }
export {ndArray}