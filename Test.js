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


import {TypeConvertor, ColumnsMean, StandardScaler,StandardDeviation, 
    LabelEncoder, shuffleArray, train_test_split, featuresAndLabels} 
    from "./Engine/Preprocessing.js"
import loadTxt from "./Engine/Load.js"


var data = "iris.txt"

var re= loadTxt(data)
//console.log(re)

var ty = TypeConvertor(re, 4)
//console.log(ty)

var c = ColumnsMean(re, 4)
//console.log(c)

var st = StandardScaler(re, 4)
//console.log(st)

var sd = StandardDeviation(re, 4)
//console.log(sd)

var lb = LabelEncoder(re, 4)
// console.log(lb)

var sf = shuffleArray(re)
//console.log(sf)

var fl = featuresAndLabels(re, 5)
//console.log(fl)

var fe = fl[0]
var l = fl[1]

var data = train_test_split(fe, l, 20)
console.log(data)