
function mat(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function dot(arra, y) {
    var matMul_array = []
    for(var i=0; i<arra.length; i++){
        matMul_array.push([])
        for(var j=0; j<arra[0].length; j++){
            matMul_array[i].push(arra[i][j]*y[i][j])
        }
    }
    return matMul_array
}

function vdot(arra, y) {
    var sum = 0
    for(var i=0; i<arra.length; i++){
        for(var j=0; j<arra[0].length; j++){
            sum = sum + arra[i][j]*y[i][j]
        }
    }
    return sum
}

function identity(shape=[]) {
    var iden_matrix = []
    for (let i = 0; i < shape[0]; i++) {
        iden_matrix.push([])
        for (let j = 0; j < shape[1]; j++) {
            if(i === j){
                iden_matrix[i].push(1)
            }else{
                iden_matrix[i].push(0)
            }
        }
    }
    return iden_matrix
}

function eye(shape=[], iden, rowmove =true){
    
    
    if (rowmove) {
        var array = []
        var sum = 0 + iden
        for (let i = 0; i < shape[0]; i++) {
            array.push([])
            for (let j = 0; j < shape[1]; j++) {
                if (i === i && j === sum ) {
                    array[i].push(1)
                } else {
                    array[i].push(0)
                } 
            }
            sum++
        }
        return array
    } else {
        var array = []
        var sum = 0 
        for (let i = 0; i < shape[0]; i++) {
            array.push([])
            for (let j = 0; j < shape[1]; j++) {
                if (i === sum  && j === i-iden) {
                    array[i].push(1)
                } else {
                    array[i].push(0)
                } 
            }
            sum++
        }
        
        return array
    }
    
}
// var a = [[1, 2], [3, 4]]
// var b = [[11, 12], [13, 14]]

// console.log(dot(a, b))

// var obj = eye([5, 5], 4, false)
// console.table(obj)


export {eye, identity, vdot, dot, mat}