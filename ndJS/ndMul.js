function matmul(arra, y, dimentions=true) {
    var matMul_array = []
    //console.log(y)
    if(dimentions){
        for(var i=0; i<arra.length; i++){
            for(var j=0; j<arra[0].length; j++){
                matMul_array.push(arra[i][j]*y[j])
            }
        }
        return matMul_array
    }
    else if (dimentions === false){
        for(var i=0; i<arra.length; i++){
            for(var j=0; j<arra[0].length; j++){
                matMul_array.push(arra[i][j]*y)
                //console.log(arra[i][j], y)
            }
        }
        return matMul_array
    }else{
        console.log("Something Went wrong")
    }
}

function matadd(array, val) {
    
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i]+val
    }

    return array

}

export {matmul, matadd}

// var arra = [[1, 2], [3, 4]]
// var y = 0
// var val = matmul(arra, y, false)
// var c = 0
// var val = matadd(val, c)
// console.log(val)