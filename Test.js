// import {array_split} from './ndJS/array_split.js'

// var array = [1, 2, 3, 4, 5, 6]
// var arr_sp = array_split(array, 3)
// console.log(arr_sp)


// import {Linspace} from './ndJS/linSpace.js'
// var arr = Linspace(2, 3, 5)
// console.log("WithOut endpoint :-", arr)

// var arr_e = Linspace(2, 3, 5, false)
// console.log("With endpoint :-",arr_e)



import { ndSearchSort } from './ndJS/ndSearchSort.js'
// var array1 = [[1, 2], [3, 4], [3, 4]]
// var array2 = [1, 2]
var a = [1, 2, 3, 4, 5, 6]
var val = ndSearchSort(a, 3)

console.log(val)