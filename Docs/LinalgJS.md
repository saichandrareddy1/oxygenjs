### LinalgJS :triangular_ruler::triangular_ruler:

Linalg is a Linear Algebra Library which will give answer's for the determinants, matrix multiplication like inner product, dot, vectordot, etc...


* :point_right: [determinant](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#det)       
    * [det function](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#det-function)
    * [invDet](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#inverse-determinant)
* :point_right: [mat](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#mat)      
    * [mat](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#mat-1)
    * [dot](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#dot)
    * [vdot](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#vdot)
    * [identity](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#vdot)
    * [eye](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#eye)
    * [inner] (https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#inner)          
   


### det

det is the having two function det and invDet, det is for the determinent of the matrix and inverse determinant for is matrix, the shape matrix should be in 2*2

:point_right: determinant                                                        

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/det.PNG" width="600" height="150">

:point_right: Inverse determinant

<img src= "https://github.com/saichandrareddy1/OxygenJS/blob/master/images/invDet.PNG" width="600" height="150">

#### det function

In determinant function we will pass the input as the 2d matrix and will return the determinant value, you can see the formula from :point_up:

importing the determinant function

    import {Det} from './LinalgJS/determinant.js'

we are giving input as the array with 2 dimention

    var a = [[1, 2], [4, 5]]
    var val = Det(a)
    console.log(val)

:point_right: Ouput 

    -3 // final value after applying the determinant

:point_right: Parameter is the array with two dimentions

#### inverse determinant 

inverse determinant will take input as the array and will return output as the matrix, for the mathematical calculation follow the :point_up: formula 

importing the invDet from the determinant

    import {invDet} from './LinalgJS/determinant.js'

inputing the array to the function 

    var a = [[1, 2], [4, 5]]
    var val = invDet(a)
    console.log(val)


:point_right: Output

    [
        [ -1.6666666666666665, 0.6666666666666666 ],
        [ 1.3333333333333333, -0.3333333333333333 ]
    ]

:point_right: parameter is the array with 2 dimention


### mat

mat is library with many function for matrix multiplication, dot products, vector dot products, etc....

##### mat

matrixMul is a matrix multiplication function, it will take input as two array and will return matrix multiplication array

importing the matMul, matrixMul(matrix1, matrix2)

    import { matrixMul } from './LinalgJS/mat.js'

inputing the data into the matrixMul function

    var a = [[1, 2], [4, 5]]
    var b = [[2, 3], [4, 6]]
    var val = matrixMul(a, b)
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: OutPut

        ┌─────────┬────┬────┐
        │ (index) │ 0  │ 1  │
        ├─────────┼────┼────┤
        │    0    │ 10 │ 15 │
        │    1    │ 28 │ 42 │
        └─────────┴────┴────┘

:point_right:  Parameter1 for the matrix1                                                     
:point_right:  Parameter2 for the matrix2                                                       

##### dot

dot product is like the element by element multiplication with the two matrix, it iwll return the matrix 

importing the dot function dot(arra, y)

    var a = [[1, 2], [4, 5]]
    var b = [[2, 3], [4, 6]]
    var val = vdot(a, b)
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: OutPut

    ┌─────────┬────┬────┐
    │ (index) │ 0  │ 1  │
    ├─────────┼────┼────┤
    │    0    │ 2  │ 6  │
    │    1    │ 16 │ 30 │
    └─────────┴────┴────┘

:point_right:  Parameter1 for the matrix1                                                     
:point_right:  Parameter2 for the matrix2                                                       

##### vdot

vector dot product is the function will take two metrices as the input and will return dot product value, it is a scaler value

importing vdot (matrix1, matrix2)

    import { vdot } from './LinalgJS/mat.js'

inputing the metrices into the function

    var a = [[1, 2], [4, 5]]
    var b = [[2, 3], [4, 6]]
    var val = vdot(a, b)
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: OutPut
 
    54 // this is the vdot product value

:point_right:  Parameter1 for the matrix1                                                     
:point_right:  Parameter2 for the matrix2  

##### identity

identity is the function which will return the identity matrix in n dimention, here the input will be shape of the matrix which the user needed

importing the identity matrix 

    import { identity } from './LinalgJS/mat.js'

inputing the shape into the function

    var val = identity([3, 3])
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: OutPut

    ┌─────────┬───┬───┬───┐
    │ (index) │ 0 │ 1 │ 2 │
    ├─────────┼───┼───┼───┤
    │    0    │ 1 │ 0 │ 0 │
    │    1    │ 0 │ 1 │ 0 │
    │    2    │ 0 │ 0 │ 1 │
    └─────────┴───┴───┴───┘

:point_right: Parameter was the shape, ex [3, 3], [3, 3]

##### eye

eye is the function to get identity matrix from requried index number, in the from of the rows or columns, input will be the shape, index number, rowsmoved with boolean

importing the eye function (shape=[], iden, rowmove =false)

    import { eye } from './LinalgJS/mat.js'

inputing the shape into the function with rowmove is false (Default)

    var val = eye([3, 3], 1)
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: OutPut

    ┌─────────┬───┬───┬───┐
    │ (index) │ 0 │ 1 │ 2 │
    ├─────────┼───┼───┼───┤
    │    0    │ 0 │ 0 │ 0 │
    │    1    │ 1 │ 0 │ 0 │
    │    2    │ 0 │ 1 │ 0 │
    └─────────┴───┴───┴───┘

inputing the shape into the function with rowmove is True

    var val = eye([3, 3], 1, true)
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: OutPut

    ┌─────────┬───┬───┬───┐
    │ (index) │ 0 │ 1 │ 2 │
    ├─────────┼───┼───┼───┤
    │    0    │ 0 │ 1 │ 0 │
    │    1    │ 0 │ 0 │ 1 │
    │    2    │ 0 │ 0 │ 0 │
    └─────────┴───┴───┴───┘

:point_right: parameter1 is for the shape of the matrix                                    
:point_right: parameter2 is for the index, from where identity should form
:point_right: parameter3 is for the rowmove true for row type identity , fasle for the column type identity


##### inner

inner product is the function like matrixMul but the multiplication will be done the row by row side, here inputs will be the two matrix and will return inner product matrix

importing the inner product inner(array1, array2)

    import { inner } from './LinalgJS/mat.js'

inputing the two array into to the matrix

    var a = [[1, 2], [4, 5]]
    var b = [[2, 3], [4, 6]]
    var val = inner(a, b)
    console.table(val)

[console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) is used to print in tabularform

:point_right: OutPut

    ┌─────────┬────┬────┐
    │ (index) │ 0  │ 1  │
    ├─────────┼────┼────┤
    │    0    │ 8  │ 16 │
    │    1    │ 23 │ 46 │
    └─────────┴────┴────┘

:point_right:  Parameter1 for the matrix1                                                     
:point_right:  Parameter2 for the matrix2  


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