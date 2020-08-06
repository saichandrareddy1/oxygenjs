## ndJS :chart_with_upwards_trend:


nsJS is the N dimentional Java script Libaray here we are going to Deal with many Mathmatical N Dimentional Matrix Calculations

Here we are going to have many functions


:point_right: [array_split](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#array-split)                                                                
:point_right: [linSpace](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#linspace)                                                          
:point_right: [ndArithmetic](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#ndarithmetic)                                                                   
:point_right: [ndMul](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#ndmul)                                                                       
:point_right: [ndOnes](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#ndones)                                                            
:point_right: [ndZeros](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#ndzeros)                                                             
:point_right: [ndRandom](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#ndrandom)                                                    
:point_right: [ndRange](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#ndrange)                                                                      
:point_right: [ndReshape](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#ndreshape)                                                   
:point_right: [ndSearch](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#ndsearch)                                                                    
:point_right: [ndSearchSort](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/ndJS.md#ndsearchsort) 


### array split

Import the array_split from the ndJS library

    import {array_split} from './ndJS/array_split.js'

Working with the function array_split(array, split_units=0)

    import {array_split} from './ndJS/array_split.js' 

    var array = [1, 2, 3, 4, 5, 6]
    var arr_sp = array_split(array, 3)
    console.log(arr_sp)

array is the sample array and array_split is the function with two parameters                    
array_split(parameter1, parameter2)                                          
parameter1 :point_right: pass a array with even numbers only                                     
parameter2 :point_right: pass any number                                                         
     
     [[1, 2], [3, 4], [5, 6]]

This is the output split array 

### linSpace

importing the Linspace from ndJS library

    import {Linspace} from './ndJS/linSpace.js'

working with function Linspace(startvalue, endvalue, numberofsteps, endpoint=true)

Here, in linspace function we are having two types of the choices      
:point_right: endpoint=true                                    
:point_right: endpoint=flase                                       

:point_right: First working with default means enpoint=true

    var arr = Linspace(2, 3, 5)
    console.log("WithOut endpoint :-", arr)

:point_right: Output

    [ 2, 2.25, 2.5, 2.75, 3 ]

:point_right: Second we are working with endpoint=false

    var arr_e = Linspace(2, 3, 5, false)
    console.log("With endpoint :-",arr_e)

:point_right: Ouput

    [ 2, 2.2, 2.4, 2.6, 2.8 ]

Explaning about the parameters

:point_right: Startvalue is about the starting number of the array            
:point_right: Endvalue is about the Ending number of the array                           
:point_right: NumberofSteps is about the different number of the steps in between start and end value                        
:point_right: endpoint is about the printing the end value or not         


### ndArithmetic

Here, ndArithmetic is a class mixed all the Arithmetic function like add, subract, ect... this is used for n dimentional matrix Arithmetic funtions

importing ndArithmetic from the ndJS

    import {ndArithmetic} from './ndJS/ndArithmetic.js'

:point_right: Add :heavy_plus_sign:

intilizing the class object 

    var ar =new ndArithmetic()

Using the Add function (array1, arra2)

    var array1 = [[1, 2], [3, 4], [3, 4]]
    var array2 = [[6, 5], [3, 4], [4, 3]]
    var val = ar.Add(array1, array2)
    console.log(val)

:point_right: parameter1 and parameter2 are the array's

:point_right: Output

    [ [ 7, 7 ], [ 6, 8 ], [ 7, 7 ] ]

Addition is for the Adding the Numbers in matrix in the form of the element by the element

:point_right: Subract :heavy_minus_sign:

intilizing the class object 

    var ar =new ndArithmetic()

Using the Subract function (array1, arra2)

    var array1 = [[1, 2], [3, 4], [3, 4]]
    var array2 = [[6, 5], [3, 4], [4, 3]]
    var val = ar.Subract(array1, array2)
    console.log(val)

:point_right: parameter1 and parameter2 are the array's

:point_right: Output

    [ [ -5, -3 ], [ 0, 0 ], [ -1, 1 ] ]

Subraction is for the Subracting the Numbers in matrix in the form of the element by the element

:point_right: Multiply :heavy_multiplication_x:

intilizing the class object 

    var ar =new ndArithmetic()

Using the Multiply function (array1, arra2)

    var array1 = [[1, 2], [3, 4], [3, 4]]
    var array2 = [[6, 5], [3, 4], [4, 3]]
    var val = ar.Multiply(array1, array2)
    console.log(val)

:point_right: parameter1 and parameter2 are the array's

:point_right: Output

    [ [ 6, 10 ], [ 9, 16 ], [ 12, 12 ] ]

Multiplication is for the Multiplying the Numbers in matrix in the form of the element by the element

:point_right: Division :heavy_division_sign:

intilizing the class object 

    var ar =new ndArithmetic()

Using the Division function (array1, arra2)

    var array1 = [[1, 2], [3, 4], [3, 4]]
    var array2 = [[6, 5], [3, 4], [4, 3]]
    var val = ar.Division(array1, array2)
    console.log(val)

:point_right: parameter1 and parameter2 are the array's

:point_right: Output

    [
        [ 0.16666666666666666, 0.4 ],
        [ 1, 1 ],
        [ 0.75, 1.3333333333333333 ]
    ]  

Division is for the Dividing the Numbers in matrix in the form of the element by the element


:point_right: Module or Remainder % :grey_exclamation:

intilizing the class object 

    var ar =new ndArithmetic()

Using the Division function (array1, arra2)

    var array1 = [[1, 2], [3, 4], [3, 4]]
    var array2 = [[6, 5], [3, 4], [4, 3]]
    var val = ar.Module(array1, array2)
    console.log(val)

:point_right: parameter1 and parameter2 are the array's

:point_right: Output

    [ [ 1, 2 ], [ 0, 0 ], [ 3, 1 ] ]  

Module is about the finding Element wise remainder of the all the elements in Matrix

:point_right: DivMod :heavy_division_sign: 

intilizing the class object 

    var ar =new ndArithmetic()

Using the DivMod function (array1, arra2)

    var array1 = [[1, 2], [3, 4], [3, 4]]
    var array2 = [[6, 5], [3, 4], [4, 3]]
    var val = ar.DivMod(array1, array2)
    console.log(val)

:point_right: parameter1 and parameter2 are the array's

:point_right: Output

    [
        [
            [ 0.16666666666666666, 0.4 ],
            [ 1, 1 ],
            [ 0.75, 1.3333333333333333 ]
        ],
        [ 
            [ 1, 2 ], [ 0, 0 ], [ 3, 1 ] 
        ]
    ] 

DivMod will perform both the things one is element wise division and another one is Element wise module(means finding the remainder)

:point_right: Power :arrow_heading_up:

intilizing the class object 

    var ar =new ndArithmetic()

Using the Power function (array1, arra2)

    var array1 = [[1, 2], [3, 4], [3, 4]]
    var array2 = [[6, 5], [3, 4], [4, 3]]
    var val = ar.Power(array1, array2)
    console.log(val)

:point_right: parameter1 and parameter2 are the array's

:point_right: Output

    [ [ 1, 32 ], [ 27, 256 ], [ 81, 64 ] ]  

Power is for the making the power to another Numbers in matrix in the form of the element by the element


### ndMul

ndMul is about the calculating the matrix and the vector this is mostly use ful at the time of the multiplying weights and the inputs

importing the matmul from the ndMul 

    import {matmul} from './ndJS/ndMul.js'

Multiplying the matrix and vector

    var array1 = [[1, 2], [3, 4], [3, 4]]
    var array2 = [1, 2]
    var val = matmul(array1, array2)

:point_right: Output

    [ 1, 4, 3, 8, 3, 8 ]

:point_right: Parameter one is the matrix                                              
:point_right: Parameter two is the vector                                                 


### ndOnes

ndOnes is the function which takes the shape and will return array with all the 1, for example shape=[3, 3] then we will get 3*3 matrix will all the ones

importing the ndOnes from ndJS

    import { ndOnes } from './ndJS/ndOnes.js'

here, now we are passing the shape into the ndOnes

    var val = ndOnes([3, 3])
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: Output

    ┌─────────┬───┬───┬───┐
    │ (index) │ 0 │ 1 │ 2 │
    ├─────────┼───┼───┼───┤
    │    0    │ 1 │ 1 │ 1 │
    │    1    │ 1 │ 1 │ 1 │
    │    2    │ 1 │ 1 │ 1 │
    └─────────┴───┴───┴───┘

:point_right: Parameter is the shape pass the array with 2 elements with rows and columns

### ndZeros

ndZeros is the function which takes the shape and will return array with all the 0, for example shape=[3, 3] then we will get 3*3 matrix will all the Zeros

importing the ndZeros from ndJS

    import { ndZeros } from './ndJS/ndZeros.js'

here, now we are passing the shape into the ndZeros

    var val = ndZeros([3, 3])
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: Output

    ┌─────────┬───┬───┬───┐
    │ (index) │ 0 │ 1 │ 2 │
    ├─────────┼───┼───┼───┤
    │    0    │ 0 │ 0 │ 0 │
    │    1    │ 0 │ 0 │ 0 │
    │    2    │ 0 │ 0 │ 0 │
    └─────────┴───┴───┴───┘

:point_right: Parameter is the shape pass the array with 2 elements with rows and columns


### ndRandom

ndRandom will take input as the shape, minrange, maxrange and will return output array with the shape given and with filled randomnumbers in the given max and min range

import ndArray from ndRandom ndArray(range_min, range_max, shape=[])

    import { ndArray } from './ndJS/ndRandom.js'

inputting the data into the function

    var val = ndArray(2, 3, [3, 3])
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: Ouput

    ┌─────────┬────────────────────┬────────────────────┬────────────────────┐
    │ (index) │         0          │         1          │         2          │
    ├─────────┼────────────────────┼────────────────────┼────────────────────┤
    │    0    │ 2.481601921186942  │ 2.292815458925495  │ 2.080122743807008  │
    │    1    │ 2.615834949096985  │ 2.7276038222248493 │ 2.771944603710583  │
    │    2    │ 2.9876797448895127 │ 2.897416178076491  │ 2.9369418343620173 │
    └─────────┴────────────────────┴────────────────────┴────────────────────┘

:point_right: shape  Parameter is the shape pass the array with 2 elements with rows and columns
:point_right: range_min this parameter is for minimum value 
:point_right: range_max this parameter is for maximum value


### ndRange

ndRange is function which creates the multi dimentional matrix and will add the number in some range here shape is the mutidimentional shape, [#rows, #columns] columns will form the range of the matrix for example we are passing shape with [3, 4], 3 says about the rows and 4 says about the column and the range will be from  0, 1, 2, 3

importing the ndRange from rangefile ndRange(shape=[])

    import { ndRange } from './ndJS/ndRange.js'

inputing the shape into the function 

    var val = ndRange([3, 4])
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: OutPut

        ┌─────────┬───┬───┬───┬───┐
        │ (index) │ 0 │ 1 │ 2 │ 3 │
        ├─────────┼───┼───┼───┼───┤
        │    0    │ 0 │ 1 │ 2 │ 3 │
        │    1    │ 0 │ 1 │ 2 │ 3 │
        │    2    │ 0 │ 1 │ 2 │ 3 │
        └─────────┴───┴───┴───┴───┘

:point_right: Parameter is the shape pass the array with 2 elements with rows and columns


### ndReshape

ndReshape is the functions will take array with only single dimention not more than that, next you need to pass what shape you need as output n dimentional array

import ndreshape function ndReshape(ReshapeArray, new_size=[])

    import { ndReshape } from './ndJS/ndReshape.js'

Passing inputs to the ndReshape function

    var a = [1, 2, 3, 4, 5, 6]
    var val = ndReshape(a, [2, 3])
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: Output

    ┌─────────┬───┬───┬───┐
    │ (index) │ 0 │ 1 │ 2 │
    ├─────────┼───┼───┼───┤
    │    0    │ 1 │ 2 │ 3 │
    │    1    │ 4 │ 5 │ 6 │
    └─────────┴───┴───┴───┘

:point_right: parameter one is the array only single dimentional array
:point_right: parameter two is the needed shaped 

### ndSearch

ndSearch is the function to search the value in the Matrix and then it will return the index where the value was present in the matrix

importing the ndSearch function ndSearch(array, valuetosearch, dimentions=false)

    import {ndSearch} from './ndJS/ndsearch.js'

:point_right: passing input to the function Single dimention

    var a = [1, 2, 3, 4, 5, 6]
    var val = ndSearch(a, 2, false)
    console.log(val)

:point_right: Output

    1 // Index Number

:point_right: passing input to the function MultiDimention dimention

    var a = [[1, 2, 3], [4, 5, 6]]
    var val = ndSearch(a, 4, true)
    console.log(val)

:point_right: Output 

    The value is a row and column [1][0]

Ouput will be the Exact row and the column of the Matrix

:point_right: parameter1 is for passing Array                                        
:point_right: parameter2 is for passing value what need to find                                  
:point_right: parameter3 is boolean true or false, if one dimention leave it as default(false), more than one make to true                        

### ndSearchSort

ndSearchSort will return the index value, first it will sort the array and then will search for the value in the array later finding the value it will return the index value

importing the ndSearchSort ndSearchSort(array, valuetosearch)

    import { ndSearchSort } from './ndJS/ndSearchSort.js'

passing the inputs to the function

    var a = [1, 2, 3, 4, 5, 6]
    var val = ndSearchSort(a, 3)

:point_right: Output

    2 // index value after sorting the array

:point_right: parameter1 is for the array with only one dimention                           
:point_right: parameter2 is for the value to find, from array after sorting



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
