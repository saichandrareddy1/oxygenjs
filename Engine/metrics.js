import {ndZeros} from '../ndJS/ndZeros.js'

"use strict"



const squared_error = (y_test=[], y_pred=[]) => {

    var squared_error_value = 0
    if(y_pred.length === y_test.length) {
        for (let i = 0; i < y_test.length; i++) {
            squared_error_value += ((y_test[i] - y_pred[i]) ** 2)
        }
    }
    return squared_error_value
}


const mean_squared_error = (y_test = [], y_pred = []) => {

    var squared_error_ = squared_error(y_test, y_pred)
    var mean = squared_error_ / y_test.length
    return mean
}

const mean_absolute_error = (y_test=[], y_pred=[]) => {

    var ab = 0

    if (y_test.length === y_pred.length) {
        for (let i = 0; i < y_test.length; i++) {
            
            ab += Math.abs(y_test[i] - y_pred[i])

        }
    }

    return ab/y_pred.length
}


var root_mean_squared_error = (y_test=[], y_pred=[]) => {

    return Math.sqrt(mean_squared_error(y_test, y_pred))
}


var mean_squared_log_error = (y_test=[], y_pred=[]) => {

    var squared_error_value = 0
    if(y_pred.length === y_test.length) {
        for (let i = 0; i < y_test.length; i++) {
            squared_error_value += ((Math.log10(y_pred[i]+1) - Math.log10(y_test[i]+1)) ** 2)
        }
    }
    return squared_error_value

}


var r2_score = (y_test=[], y_pred=[]) => {

    var upper = 0
    var lower = 0
    var y_mean = 0

    for (let i = 0; i < y_test.length; i++) {
        upper += (y_test[i] - y_pred[i])**2
        y_mean += y_test[i]
    }
    for (let i = 0; i < y_test.length; i++) {
        var mean = y_mean / y_test.length
        lower += (y_test[i] - mean)**2
    }

    return 1-((upper)/(lower))

}


var accuracy_score = (y_test=[], y_pred=[]) => {

    var t = 0
    var n = 0

    for (let i = 0; i < y_test.length; i++) {
        if (y_test[i] === y_pred[i]){
            t += 1
        }else{
            n += 1
        };
        
    }

    return (t)/(t+n)

}

var emptyMatrix = (val) => {
    var arr = []
    for (let i = 0; i < val; i++) {
        arr[i] = []
    }
    return arr
}


var confusion_matrix = (y_test=[], y_pred=[]) => {

    var set = [...new Set(y_test)]
    var arr = []

    for (let i = 0; i < set.length; i++) {
        arr[i] = ndZeros([0, set.length])    
    }

    for (let i = 0; i < y_test.length; i++) {
        arr[y_test[i]][y_pred[i]] +=1
    }
    return arr
}


var recall = (values=[]) => {
    var col = ndZeros([0, values.length])
    var diag = ndZeros([0, values.length])
    
    for (let i = 0; i < values[0].length; i++) {
        for (let j = 0; j < values.length; j++) {
            col[i] += values[j][i]
            if (i === j) {
                diag[i] = values[i][j]
            }
        }
    }
    var re = []
    for (let i = 0; i < col.length; i++) {
        re.push(diag[i]/col[i])
        
    }
    return re
}

var precision = (values=[]) => {
    var col = ndZeros([0, values.length])
    var diag = ndZeros([0, values.length])
    
    for (let i = 0; i < values[0].length; i++) {
        for (let j = 0; j < values.length; j++) {
            col[i] += values[i][j]
            if (i === j) {
                diag[i] = values[j][i]
            }
        }
    }
    var re = []
    for (let i = 0; i < col.length; i++) {
        re.push(diag[i]/col[i])
        
    }
    return re
}

var f1score = (values=[]) =>{

    var pre = precision(values)
    var rec = recall(values)
    var f1 =[]
    for (let i = 0; i < rec.length; i++) {
        if (true) {
            var val = 2*((pre[i] * rec[i])/(pre[i] + rec[i]))
            f1.push(val)
        }
    }
    return f1 
}

function classification_report(values=[]){
    var pre = precision(values)
    var rec = recall(values)
    var f1 = f1score(values)

    console.log(`---------------------------------------`)
    console.log(`| Class | Precision | Recall | F1score |`)
    console.log(`---------------------------------------`)
    for (let i = 0; i < f1.length; i++) {
        
        console.log(`|   ${i}   | ${pre[i].toFixed(2)}      | ${rec[i].toFixed(2)}   | ${f1[i].toFixed(2)}    |`)
        
        
    }
    console.log(`---------------------------------------`)
}


