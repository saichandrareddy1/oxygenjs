### LinalgJS :triangular_ruler::triangular_ruler:

Linalg is a Linear Algebra Library which will give answer's for the determinants, matrix multiplication like inner product, dot, vectordot, etc...


* :point_right: [determinant](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#det)       
    * [det function](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#det-function)
    * [invDet](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#inverse-determinant)
* :point_right: [mat](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/LinalgJS.md#mat)      
    * mat
    * dot
    * vdot
    * identity
    * eye
    * inner              


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


##### mat



##### dot



##### vdot



##### identity



##### eye



##### inner