// import {array_split} from './ndJS/array_split.js'

// var array = [1, 2, 3, 4, 5, 6]
// var arr_sp = array_split(array, 3)
// console.log(arr_sp)


// import {Linspace} from './ndJS/linSpace.js'
// var arr = Linspace(2, 3, 5)
// console.log("WithOut endpoint :-", arr)

// var arr_e = Linspace(2, 3, 5, false)
// console.log("With endpoint :-",arr_e)





// import { inner } from './LinalgJS/mat.js'

// var a = [[1, 2], [4, 5]]
// var b = [[2, 3], [4, 6]]
// var val = inner(a, b)
// console.table(val)


// import {TypeConvertor, ColumnsMean, StandardScaler,StandardDeviation, 
//     LabelEncoder, shuffleArray, train_test_split, featuresAndLabels} 
//     from "./Engine/Preprocessing.js"


// import loadTxt from "./Engine/Load.js"


// var data = "iris.txt"
// var re= loadTxt(data)
// // console.table(re)

// import { train_test_split, featuresAndLabels } from "./Engine/Preprocessing.js"
// import { textCount } from "./Engine/textCount.js"

// //var ty = TypeConvertor(re, 4)
//console.log(ty)

// var c = ColumnsMean(re, 4)
// console.log(c)

// var st = StandardScaler(re, 4)
// console.log(st)

// var sd = StandardDeviation(re, 4)
// console.log(sd)

// var lb = LabelEncoder(re, 4)
// console.log(lb)

// var array = [1, 2,3 ,4, 5, 6, 7]
// var sf = shuffleArray(array)
// console.log(sf)

// var fl = featuresAndLabels(re, 5)
// var fe = fl[0]
// var l = fl[1]

// console.log(fe, l)



// var data = train_test_split(fe, l, 20)
// var X_train = data[0]
// var X_test = data[1]
// var y_train = data[2]
// var y_test = data[3]
// console.log(data)


// var re  =  textCount('test.txt', 'to')
// console.log(re)


import {mean_squared_log_error} from "./Engine/metrics.js";


var y_test = [0.2, 0.3, .22, .44, .111, .532, .45]
var y_pred = [.333, .222, .444, .2, .33, .111, .333]


var SquareError = mean_squared_log_error(y_test, y_pred)
console.log(SquareError)