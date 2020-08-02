import Math from "mathjs";

function TypeConvertor(ArrayObject=[], NumberOfColumns) {
    for(var i=0; i<ArrayObject.length; i++){
        for(var j=0; j<NumberOfColumns; j++ ){
            ArrayObject[i][j] = Number(ArrayObject[i][j]);
        }
    }
    return ArrayObject
}

//const ArrayData = TypeConvertor(result, 4)

function ColumnsMean(ArrayObject = [], NumberOfColumns) {
    let array = [];
    let mean_array = []
    
    for(var j=0; j<NumberOfColumns; j++){
        array.push([])
        for(var i=0; i<ArrayObject.length; i++){
            array[j].push(ArrayObject[i][j]);
        }
    }
    
    for(var k=0; k<array.length; k++){
        mean_array.push(Math.mean(array[k]))
    }
    return mean_array


}

//var mean_arr = ColumnsMean(ArrayData, 4);

function StandardDeviation(ArrayObject=[], MeanArray=[], NumberOfColumns) {

    let array = [];
    let standard_dev = []
    for(var j=0; j<NumberOfColumns; j++){
        array.push([])
        for(var i=0; i<ArrayObject.length; i++){
            var std = Math.pow((ArrayObject[i][j] - MeanArray[j]), 2)/ArrayObject.length
            array[j].push(std);
        }
    }

    for(var k=0; k<array.length; k++){
        standard_dev.push(Math.sqrt(Math.sum(array[k])))
    }

    return standard_dev
}


//const standard_dev = StandardDeviation(ArrayData, mean_arr, 4)

function StandardScaler(ArrayObject=[], MeanArray=[], standard_dev=[], NumberOfColumns){

    let array = [];
    for(var j=0; j<NumberOfColumns; j++){
        array.push([])
        for(var i=0; i<ArrayObject.length; i++){
            var std = (ArrayObject[i][j] - MeanArray[j])/standard_dev[j]
            array[j].push(std);
        }
    }

    return array

}


//const arr = StandardScaler(ArrayData, mean_arr, standard_dev, 4)
// console.log(arr)
export {TypeConvertor, ColumnsMean, StandardScaler,StandardDeviation}