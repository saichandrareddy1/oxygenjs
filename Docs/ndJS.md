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






### ndMul


### ndOnes


### ndZeros


### ndRandom


### ndRange


### ndReshape


### ndSearch


### ndSearchSort