// import {array_split} from './ndJS/array_split.js'

// var array = [1, 2, 3, 4, 5, 6]
// var arr_sp = array_split(array, 3)
// console.log(arr_sp)


// import {Linspace} from './ndJS/linSpace.js'
// var arr = Linspace(2, 3, 5)
// console.log("WithOut endpoint :-", arr)

// var arr_e = Linspace(2, 3, 5, false)
// console.log("With endpoint :-",arr_e)




import {invDet} from './LinalgJS/determinant.js'

var a = [[1, 2], [4, 5]]
var val = invDet(a)
console.log(val)