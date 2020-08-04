

function ndReshape(ReshapeArray, new_size=[]) {
    var new_array = []
    if(new_size[0]*new_size[1] === ReshapeArray.length){
        for(var i=0; i<new_size[0]; i++){
            new_array.push([])
            for(var j=0; j<new_size[1]; j++){
                new_array[i].push(ReshapeArray.shift())
            }
        }
        return new_array
    }else{
        console.log(`ValueError : shape of the array ${ReshapeArray.length} was not satisfying the new shape ${new_size[0]*new_size[1]} == [${new_size[0]}, ${new_size[1]}]`)
    }
    
}

// var arra = [1, 2, 3, 2, 3, 4, 4, 3]
// var a = ndReshape(arra, [4, 2])
// console.log(a)

export {ndReshape}