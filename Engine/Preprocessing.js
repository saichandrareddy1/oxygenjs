import Math from "mathjs";
import loadTxt from "./Load.js";

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

function StandardDeviation(ArrayObject=[], NumberOfColumns) {

    let array = [];
    let standard_dev = []
    var MeanArray = ColumnsMean(ArrayObject, NumberOfColumns)
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

function StandardScaler(ArrayObject=[], NumberOfColumns){
    var standard_dev = StandardDeviation(ArrayObject, NumberOfColumns)
    var MeanArray = ColumnsMean(ArrayObject, NumberOfColumns)
    let array = [];
    for(var j=0; j<NumberOfColumns; j++){
        array.push([])
        for(var i=0; i<ArrayObject.length; i++){
            ArrayObject[i][j] = Math.round(((ArrayObject[i][j] - MeanArray[j])/standard_dev[j]), 2)
            //array[j].push(std);
        }
    }

    return ArrayObject

}

var resul = loadTxt('iris.txt')

// console.table(resul)
var LabelEncoder = (ArrayData=[], columnNumber) => {
    var array = []
    for (let i = 0; i < ArrayData.length; i++) {
        for (let j = columnNumber; j < columnNumber + 1; j++) {
            ArrayData[i][columnNumber] = ArrayData[i][columnNumber].replace(/(\r\n|\n|\r)/gm, "");
            array.push(ArrayData[i][columnNumber]);  
        };
    }
    var set = [...new Set(array)]
    var obj = {}
    for (let i = 0; i < set.length; i++) {
        obj[i] = set[i];
    }
    for (let i = 0; i < ArrayData.length; i++) {
        for (let j = columnNumber; j < columnNumber+1; j++) {
            ArrayData[i][columnNumber] = ArrayData[i][columnNumber].replace(/(\r\n|\n|\r)/gm, "");
            for (let k = 0; k < set.length; k++) {
                if (ArrayData[i][columnNumber] === obj[k]) {
                    ArrayData[i][columnNumber] = k
                };
                
            }  
        };
    }
    return ArrayData
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

var featuresAndLabels = (ArrayData=[], LabelColumnNumber) => {
    var ArrayData = shuffleArray(ArrayData)
    var feartures = []
    var labels = []
    for (let i = 0; i < ArrayData.length; i++) {
        labels[i] = []
        feartures[i] =[]
        for (let j = 0; j < ArrayData[0].length; j++) {
            if (j === LabelColumnNumber-1) {
                labels[i].push(ArrayData[i][j])
            } else {
                feartures[i].push(ArrayData[i][j])
            }
            
        };
        
    }
    return [feartures, labels]
}

var train_test_split = (Features=[], Labels = [], test_size=20) => {
    var per = ((test_size / 100) * (Features.length))
    var X_test = []
    var X_train = []

    var y_test = []
    var y_train = []

    var sum = 0
    for (let i = 0; i < Features.length; i++) {
        if ((i%5 === 0) && X_test.length < per ) {
            X_test.push(Features[i])
            sum ++
        } else {
            X_train.push(Features[i])
        };
    }

    var summ = 0
    for (let j = 0; j < Labels.length; j++) {
        if ((j%5 === 0) && y_test.length < per) {
            y_test.push(Labels[j])
            summ ++
        } else {
            y_train.push(Labels[j])
        };   
    }
    return [X_train, X_test, y_train, y_test]
}

// var sta = StandardScaler(resul, 4)
// console.log(sta)

// var resu = LabelEncoder(resul, 4)
// var result = TypeConvertor(resu, 5)
// var li = featuresAndLabels(result, 5)
// var X = li[0]
// var y = li[1]
// //console.log(fe.length, la.length)
// var res = train_test_split(X, y, 20)
// var X_train = res[0]
// var X_test  = res[1]
// var y_train = res[2]
// var y_test  = res[3]

// console.log(X_train)
// console.log(X_test)
// console.log(y_train)
// console.log(y_test)

//const arr = StandardScaler(ArrayData, mean_arr, standard_dev, 4)
// console.log(arr)
export {TypeConvertor, ColumnsMean, StandardScaler,StandardDeviation, 
    LabelEncoder, shuffleArray, train_test_split, featuresAndLabels}