import { matmul, matadd } from '../ndJS/ndMul.js';

var GradientDecent = (X, Y, LearningRate=0.0001, epochs=1000) => {
    var m = 0
    var c = 0

    for (let i = 0; i < epochs; i++) {
        if (X.length !== Y.length) {
            console.log(`Valueerror: shaps are not equal shapes = [${X.length+"],["+Y.length}]`)
            break
        }
        var val = matmul(X, m, false)
        var Y_pred =  matadd(val, c)
        console.log(Y_pred)
        var D_m = 0
        var D_c = 0
        for (let i = 0; i < X.length; i++) {
            for (let j = 0; j < X[0].length; j++) {
                D_m += (-2/X.length) * (X[i][j] * (Y[i] - Y_pred[i]))
                D_c += (-2/X.length) * (Y[i] - Y_pred[i])  
            }
        }
        console.log(D_m, D_c)
        m = m - (LearningRate * D_m)
        c = c - (LearningRate * D_c)
    }
    return [m, c]
}

// var X = [[1, 2, 5], [3, 4,5], [1, 2, 3]]
// var Y = [2,  3, 3]

// var re = GradientDecent(X, Y)
// console.log(re)

export {GradientDecent}
