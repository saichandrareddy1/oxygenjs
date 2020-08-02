
import loadTxt from './Engine/Load.js'
import {TypeConvertor, ColumnsMean, StandardScaler, StandardDeviation} from './Engine/Preprocessing.js'
var result_arr = loadTxt('./Engine/iris.txt');
var value = TypeConvertor(result_arr, 4)
var mean_array = ColumnsMean(result_arr, 4)
var std_array = StandardDeviation(result_arr, mean_array, 4)
var std_sca = StandardScaler(result_arr, mean_array, std_array, 4)
console.log(std_sca)