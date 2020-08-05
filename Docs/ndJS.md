### ndJS :chart_with_upwards_trend:


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


### ndRange


### ndReshape


### ndSearch


### ndSearchSort