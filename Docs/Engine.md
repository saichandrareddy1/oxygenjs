### Engine :computer::computer:

Engine is for the machine learning purpose which will have many function regarding the preprocessing, training splitting data, resampleling etc ......

Present we are having some Functions

* :point_right: Load  

    * [textLoad](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#load)

* :point_right: Preprocessing  

    * [TypeConvertor](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#typeconvertor)
    * [ColumnsMean](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#columnsmean)
    * [StandardScaler](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#standardscaler)
    * [StandardDeviation](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#standarddeviation)
    * [LabelEncoder](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#labelencoder)
    * [shuffleArray](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#shufflearray)
    * [train_test_split](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#train_test_split)
    * [featuresAndLabels](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#featuresandlabels) 
                                                   
* :point_right: textCount       

    * [textCount](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/Engine.md#textcount)                                                                  



:point_right: textLoad



#### Load

textLoad is the function which will take input as the text and will return output as the metrices.

importing the textLoad function loadTxt(data)
```js
    import loadTxt from "./Engine/Load.js"
```
sending input to the loadTxt function
```js
    var data = "iris.txt"
    var re= loadTxt(data)
    console.table(re)
```
[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: OutPut
```js
    ┌─────────┬───────┬───────┬───────┬───────┬─────────────────────┐
    │ (index) │   0   │   1   │   2   │   3   │          4          │
    ├─────────┼───────┼───────┼───────┼───────┼─────────────────────┤
    │    0    │ '5.1' │ '3.5' │ '1.4' │ '0.2' │   'Iris-setosa\r'   │
    │    1    │ '4.9' │ '3.0' │ '1.4' │ '0.2' │   'Iris-setosa\r'   │
    │    2    │ '4.7' │ '3.2' │ '1.3' │ '0.2' │   'Iris-setosa\r'   │
    │    3    │ '4.6' │ '3.1' │ '1.5' │ '0.2' │   'Iris-setosa\r'   │
    │    4    │ '5.0' │ '3.6' │ '1.4' │ '0.2' │   'Iris-setosa\r'   │
    │    5    │ '5.4' │ '3.9' │ '1.7' │ '0.4' │   'Iris-setosa\r'   │
    │    6    │ '4.6' │ '3.4' │ '1.4' │ '0.3' │   'Iris-setosa\r'   │
    │    7    │ '5.0' │ '3.4' │ '1.5' │ '0.2' │   'Iris-setosa\r'   │
    └─────────┴───────┴───────┴───────┴───────┴─────────────────────┘
    
    .......More
```
:point_right: Parameter is the row File Name


### :point_right: Preprocessing

Preprocessing is the one of the important tecinique in machine we need to make our data very cleanly to understand by the algorithm

#### TypeConvertor

TypeConvertor is the function to convert the string data to the integer data, **suppose the give data '5.3' it will convert to the 5.3 which is the integer**

importing the type convertor function
```js
    import { TypeConvertor } from "./Engine/Preprocessing.js"
```
inputing the data into the function
```js
    var ty = TypeConvertor(re, 4)
    console.log(ty)
```
:point_right: Output
```js
    [
        [ 5.1, 3.5, 1.4, 0.2, 'Iris-setosa\r' ],
        [ 4.9, 3, 1.4, 0.2, 'Iris-setosa\r' ],
        [ 4.7, 3.2, 1.3, 0.2, 'Iris-setosa\r' ],
        [ 4.6, 3.1, 1.5, 0.2, 'Iris-setosa\r' ],
        [ 5, 3.6, 1.4, 0.2, 'Iris-setosa\r' ],
        [ 5.4, 3.9, 1.7, 0.4, 'Iris-setosa\r' ],
        [ 4.6, 3.4, 1.4, 0.3, 'Iris-setosa\r' ],
        [ 5, 3.4, 1.5, 0.2, 'Iris-setosa\r' ],
        [ 4.4, 2.9, 1.4, 0.2, 'Iris-setosa\r' ],
        [ 4.9, 3.1, 1.5, 0.1, 'Iris-setosa\r' ],
        [ 5.4, 3.7, 1.5, 0.2, 'Iris-setosa\r' ],
        [ 4.8, 3.4, 1.6, 0.2, 'Iris-setosa\r' ],
        [ 4.8, 3, 1.4, 0.1, 'Iris-setosa\r' ],
        [ 4.3, 3, 1.1, 0.1, 'Iris-setosa\r' ],
        [ 5.8, 4, 1.2, 0.2, 'Iris-setosa\r' ],
        [ 5.7, 4.4, 1.5, 0.4, 'Iris-setosa\r' ],
        [ 5.4, 3.9, 1.3, 0.4, 'Iris-setosa\r' ],
        [ 5.1, 3.5, 1.4, 0.3, 'Iris-setosa\r' ],
        [ 5.7, 3.8, 1.7, 0.3, 'Iris-setosa\r' ],
        [ 5.1, 3.8, 1.5, 0.3, 'Iris-setosa\r' ],
        [ 5.4, 3.4, 1.7, 0.2, 'Iris-setosa\r' ],
        [ 5.1, 3.7, 1.5, 0.4, 'Iris-setosa\r' ],
        [ 4.6, 3.6, 1, 0.2, 'Iris-setosa\r' ],
        [ 5.1, 3.3, 1.7, 0.5, 'Iris-setosa\r' ],
        [ 4.8, 3.4, 1.9, 0.2, 'Iris-setosa\r' ],
        [ 5, 3, 1.6, 0.2, 'Iris-setosa\r' ],
        [ 5, 3.4, 1.6, 0.4, 'Iris-setosa\r' ],
        [ 5.2, 3.5, 1.5, 0.2, 'Iris-setosa\r' ],
        [ 5.2, 3.4, 1.4, 0.2, 'Iris-setosa\r' ],
        [ 4.7, 3.2, 1.6, 0.2, 'Iris-setosa\r' ],
        [ 4.8, 3.1, 1.6, 0.2, 'Iris-setosa\r' ],
        [ 5.4, 3.4, 1.5, 0.4, 'Iris-setosa\r' ],
        [ 5.2, 4.1, 1.5, 0.1, 'Iris-setosa\r' ],
        [ 5.5, 4.2, 1.4, 0.2, 'Iris-setosa\r' ],
        [ 4.9, 3.1, 1.5, 0.1, 'Iris-setosa\r' ],
        [ 5, 3.2, 1.2, 0.2, 'Iris-setosa\r' ],
        [ 5.5, 3.5, 1.3, 0.2, 'Iris-setosa\r' ],
        [ 4.9, 3.1, 1.5, 0.1, 'Iris-setosa\r' ]
        .... 100 more
    ]
```
:point_right:  Parameter one the passing the matrix data 
:point_right:  parameter two the numberofcolumns to convert into the numeric 


#### ColumnsMean

ColumnsMeans is the function which takes the matrix data and numberof columns that you are willing to find the mean, it will return array with the mean of all the columns in list

importing the columnsmean function
```js
    import { ColumnsMean } from "./Engine/Preprocessing.js"
```
Inputting the data into the columnsmean
```js
    var c = ColumnsMean(re, 4)
    console.log(c)
```
:point_right: Output
```js
        [
            5.843333333333335,
            3.0540000000000007,
            3.7586666666666693,
            1.1986666666666672
        ]
```
:point_right:  Parameter one the passing the matrix data 
:point_right:  parameter two the numberofcolumns to find the mean

#### StandardScaler

Standard Scaler is a function used to do normalization for the data, it will take matrix as the input and will return output as the normalized matrix data

importing the standardscaler function
```js
    import { StandardScaler } from "./Engine/Preprocessing.js"
```
inputting the matrix data to the function
```js
    var st = StandardScaler(re, 4)
    console.log(st)
```
:point_right:  Output

 ```js
   [
        [ -0.9, 1.03, -1.34, -1.31, 'Iris-setosa\r' ],
        [ -1.14, -0.12, -1.34, -1.31, 'Iris-setosa\r' ],
        [ -1.39, 0.34, -1.4, -1.31, 'Iris-setosa\r' ],
        [ -1.51, 0.11, -1.28, -1.31, 'Iris-setosa\r' ],
        [ -1.02, 1.26, -1.34, -1.31, 'Iris-setosa\r' ],
        [ -0.54, 1.96, -1.17, -1.05, 'Iris-setosa\r' ],
        [ -1.51, 0.8, -1.34, -1.18, 'Iris-setosa\r' ],
        [ -1.02, 0.8, -1.28, -1.31, 'Iris-setosa\r' ],
        [ -1.75, -0.36, -1.34, -1.31, 'Iris-setosa\r' ],
        [ -1.14, 0.11, -1.28, -1.44, 'Iris-setosa\r' ],
        [ -0.54, 1.49, -1.28, -1.31, 'Iris-setosa\r' ],
        [ -1.26, 0.8, -1.23, -1.31, 'Iris-setosa\r' ],
        [ -1.26, -0.12, -1.34, -1.44, 'Iris-setosa\r' ],
        [ -0.9, 1.49, -1.28, -1.05, 'Iris-setosa\r' ],
        [ -1.51, 1.26, -1.57, -1.31, 'Iris-setosa\r' ],
        [ -0.9, 0.57, -1.17, -0.92, 'Iris-setosa\r' ],
        [ -1.26, 0.8, -1.06, -1.31, 'Iris-setosa\r' ],
        [ -1.02, -0.12, -1.23, -1.31, 'Iris-setosa\r' ],
        [ -1.51, 0.34, -1.34, -1.31, 'Iris-setosa\r' ]
        .... 120 more
    ]
```
:point_right:  Parameter one the passing the matrix data                                    
:point_right:  parameter two the numberofcolumns to return normalized data


#### StandardDeviation

StandardDeviation is the function is used to find the standarddeviation for columns which we have passed, we will give data and number of columns to return standarddeviation

importing the standard deviation
```js
    import { StandardDeviation } from "./Engine/Preprocessing.js"
```
inputting the data to the function
```js
    var sd = StandardDeviation(re, 4)
    console.log(sd)
```

:point_right: Output
```js
    [
        0.8253012917851406,
        0.4321465800705438,
        1.7585291834055206,
        0.7606126185881716
    ]
```

:point_right:  Parameter one the passing the matrix data                                    
:point_right:  parameter two the numberofcolumns to return standard deviation

    
#### LabelEncoder

LabelEncoder is a technique to encode the categorical data into the numeric data, it will take the data matrix and return's encoded data 

importing the LabelEncoder function
```js    
    import { LabelEncoder } from "./Engine/Preprocessing.js"
```
inputting the data into the function 
```js
    var lb = LabelEncoder(re, 4)
    console.log(lb)
```
:point_right: OutPut
```js
    [
        [ '5.1', '3.5', '1.4', '0.2', 0 ],
        [ '4.9', '3.0', '1.4', '0.2', 0 ],
        [ '4.7', '3.2', '1.3', '0.2', 0 ],
        [ '4.6', '3.1', '1.5', '0.2', 0 ],
        [ '5.0', '3.6', '1.4', '0.2', 0 ],
        [ '5.4', '3.9', '1.7', '0.4', 0 ]
    ]
```
:point_right:  Parameter one the passing the matrix data                                    
:point_right:  parameter two the numberofcolumns to return standard deviation

#### shuffleArray

Shuffle array is used to shuffle, it will take array as input and will return shuffled array as output

importing the shufflearray function
```js
    import { shuffleArray } from "./Engine/Preprocessing.js"
```
inputting the shuffle array with the data

```js   
    var array = [1, 2,3 ,4, 5, 6, 7] // input array with sequence
    var sf = shuffleArray(array)
    console.log(sf)
```
:point_right: OutPut
```js
    [1, 5, 7, 4,2, 6, 3] // output array shuffled
```
:point_right: the parameter is the array 


#### train_test_split
train_test_split is the function to split the data into the two parts training and the testing part, it will take three inputs 

1. Features data
2. Labels data
3. testset size you are seeing

importing the train_test_split function 
```js
    import { train_test_split } from "./Engine/Preprocessing.js"
```
inputting the data into the train_test_split function
```js
    var data = train_test_split(features, labels, 20)
    var X_train = data[0]
    var X_test = data[1]
    var y_train = data[2]
    var y_test = data[3]
    console.log(data)
```

:point_right: OutPut
```js
    The data will be divided into train and test sets
```
#### featuresAndLabels
featuresAndLabels is the function is used to separate the data into the features and labels, it will take 2

1. ArrayData Data is to be in array format
2. LabelColumnNumber :  which you need to make labels

importing the featuresAndLabels function 
```js
    import { featuresAndLabels } from "./Engine/Preprocessing.js"
```
inputting the data into the featureAndLabels function

```js
    var fl = featuresAndLabels(re, 5)
    var fe = fl[0]
    var l = fl[1]
    console.log(fe, l)
```

:point_right: Output

```js

    [
        [ '5.3', '3.7', '1.5', '0.2' ],
        [ '5.9', '3.0', '5.1', '1.8' ],
        [ '7.7', '2.6', '6.9', '2.3' ],
        [ '5.4', '3.9', '1.3', '0.4' ],
        [ '5.8', '4.0', '1.2', '0.2' ],
        [ '6.3', '2.8', '5.1', '1.5' ],
    ] //Features

    [
        [ 'Iris-setosa\r' ],     [ 'Iris-virginica' ],    [ 'Iris-virginica\r' ],
        [ 'Iris-setosa\r' ],     [ 'Iris-setosa\r' ],     [ 'Iris-virginica\r' ],
        [ 'Iris-versicolor\r' ], [ 'Iris-virginica\r' ],  [ 'Iris-versicolor\r' ],
    ] // Labels
```



### :point_right: textCount 


#### textCount

textCount is a function is used to count the given word from the entire text of the file

importing the textCount function 

```js
    import { textCount } from "./Engine/textCount.js"
```
inputting the data into the text count function

1. textfile from the local directory
2. which word to search

```js
    var re  =  textCount('test.txt', 'to')
    console.log(re)
```

:point_right: ouput
```js
    3 // three times the to is repeated in the data
```

#### Gradient Decent

Gradient descent is a first-order iterative optimization algorithm for finding a local minimum of a differentiable function. To find a local minimum of a function using gradient descent, we take steps proportional to the negative of the gradient (or approximate gradient) of the function at the current point.[Read More...](https://en.wikipedia.org/wiki/Gradient_descent#:~:text=Gradient%20descent%20is%20a%20first,function%20at%20the%20current%20point.)

importing the Gradient decent function (X, Y, LearningRate=0.0001, epochs=1000)

```js
import {GradientDecent} from "./Engine/gradientDecent.js";
```
inputting the data into the function
```js
var x = [
    [2.3, 2.4, 3.5],
    [3.2, 4.3, 5.4],
    [3.4, 2.4, 3.5]
]

var y = [[1],
         [0],
         [1]
]

var val = GradientDecent(x, y)
console.log(val)

```
:point_right: output

```js
[ 0.17650444224046516, 0.10466419372845183 ]
```

:point_right: X is the features data                                             
:point_right: y is the labels data  
:point_right: Learning rate value                                                           
:point_right: Numbers of Epochs  


### Give a Star :star::star::star:
:point_right: Feel free to give a star for the [repository](https://github.com/saichandrareddy1/OxygenJS) :star::star::star:


Become a contributer :heart::heart::heart:

### Connect with me

[![github](https://cloud.githubusercontent.com/assets/17016297/18839843/0e06a67a-83d2-11e6-993a-b35a182500e0.png)][1]
[![linkedin](https://cloud.githubusercontent.com/assets/17016297/18839848/0fc7e74e-83d2-11e6-8c6a-277fc9d6e067.png)][3]
[![facebook](https://cloud.githubusercontent.com/assets/17016297/18839836/0a06deb4-83d2-11e6-8078-1d0974af0f63.png)][2]

[1]: https://github.com/saichandrareddy1
[2]: https://www.linkedin.com/in/sai-chandra-reddy-vuta-946b2b133/
[3]: https://www.facebook.com/saichandrareddy.vuta

### Connect with me on Community
NameError.ai Comminity :- https://community.nameerror.ai/members/saireddy/

### Thanks for the reading :pray::pray::pray: