
import Math from 'mathjs'
import {ndArray} from '../Engine/ndOX.js'
import {matmul} from './ndMul.js'

const X = ndArray(2, 4, [5, 5])
const y = [1, 1, 2, 2, 1] 

var w=ndArray(0, 1,[0, 5])

// y = 1/1+e-x

class LinearModels {

    LogisticRegression = (X, y, w) =>{
        var Lr_array = []
        for(var i=0; i <= X.length - 1; i++){

            var y_p = Math.round(X[i] * w[i] + 1, 2)
            var y_ = 1/(1+Math.exp(y_p))

            if (y_ >= 0.1){
                console.log(y_)
                Lr_array.push(1)
            }else{
                console.log(Math.round(y_, 2))
                Lr_array.push(0)
            }
        } 
        return Lr_array
    }

    SimpleLinearRegression = (X, y, w) => {
        
        var SL_r = []
        for(var i = 0; i <= X.length - 1; i++){
            var y_ = X[i] * w[i] + 1
            SL_r.push(y_)
        }
        return SL_r
    }

    MultipleLinearRegression = (X, y, w) => {
        var MLR_array = []
        var array = matmul(X, w)
        return array
    }
}


var fu = new LinearModels();
// var re = fu.LogisticRegression(X, y, w);
// var sr = fu.SimpleLinearRegression(X, y, w)
var ss = fu.MultipleLinearRegression(X, y, w)
console.log(ss)