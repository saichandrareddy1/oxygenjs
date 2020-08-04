function matmul(arra, y) {
    var matMul_array = []
    for(var i=0; i<arra.length; i++){
        for(var j=0; j<arra[0].length; j++){
            matMul_array.push(arra[i][j]*y[j])
        }
    }
    return matMul_array
}
export {matmul}