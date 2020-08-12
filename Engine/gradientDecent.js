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
        var D_m = 0
        var D_c = 0
        for (let i = 0; i < X.length; i++) {
            for (let j = 0; j < X[0].length; j++) {
                D_m += (-2/X.length) * (X[i][j] * (Y[i] - Y_pred[i]))
                D_c += (-2/X.length) * (Y[i] - Y_pred[i])  
            }
        }
        m = m - (LearningRate * D_m)
        c = c - (LearningRate * D_c)
    }
    return [m, c]
}

export {GradientDecent}
