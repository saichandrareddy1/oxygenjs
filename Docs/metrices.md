## Metrics

***This docs include all the scores and errors***, it help's to find the data is working or not

#### Squared Error

Suqared error is the distance between the predicted value and the actual value and then we will do summitation of the all the values.

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/sse.png" width="26" height="20">

importing the Squared error function (y_test=[], y_pred=[])

```js
import { squared_error} from "./Engine/metrics.js";
```

inputs to the functions 

```js
var y_test = [0.2, 0.3, .22, .44, .111, .532, .45]
var y_pred = [.333, .222, .444, .2, .33, .111, .333]


var SquareError = squared_error(y_test, y_pred)
console.log(SquareError)
```

:point_right: Output

```js

0.37044000000000005 // Squared Error

```
:point_right: **y_test parameter** is the array and testing data
:point_right: **y_pred parameter** is the array and predicting data

#### Mean Square Error
The Mean Squared Error (MSE) or Mean Squared Deviation (MSD) of an estimator measures the average of error squares i.e. the average squared difference between the estimated values and true value. It is a risk function, corresponding to the expected value of the squared error loss. It is always non – negative and values close to zero are better. The MSE is the second moment of the error (about the origin) and thus incorporates both the variance of the estimator and its bias.[ Read More ....](https://en.wikipedia.org/wiki/Mean_squared_error)

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/mse.png" width="26" height="20">

importing the mean Squared error function (y_test=[], y_pred=[])

```js
import { mean_squared_error} from "./Engine/metrics.js";
```

inputs to the functions 

```js
var y_test = [0.2, 0.3, .22, .44, .111, .532, .45]
var y_pred = [.333, .222, .444, .2, .33, .111, .333]


var mean_SquareError = mean_squared_error(y_test, y_pred)
console.log(mean_SquareError)
```

:point_right: Output

```js

0.05292000000000001 // mean_Squared Error

```
:point_right: **y_test parameter** is the array and testing data
:point_right: **y_pred parameter** is the array and predicting data


#### Mean Absolute Error
In statistics, mean absolute error (MAE) is a measure of errors between paired observations expressing the same phenomenon. ... MAE is calculated as: It is thus an arithmetic average of the absolute errors , where is the prediction and. the true value. [Read More...](https://en.wikipedia.org/wiki/Mean_absolute_error)

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/mae.jpg" width="26" height="20">

importing the mean absolute error function (y_test=[], y_pred=[])

```js
import { mean_absolute_error} from "./Engine/metrics.js";
```

inputs to the functions 

```js
var y_test = [0.2, 0.3, .22, .44, .111, .532, .45]
var y_pred = [.333, .222, .444, .2, .33, .111, .333]


var mean_abs_Error = mean_absolute_error(y_test, y_pred)
console.log(mean_abs_Error)
```

:point_right: Output

```js

0.2045714 // mean_absoulte Error

```
:point_right: **y_test parameter** is the array and testing data
:point_right: **y_pred parameter** is the array and predicting data


#### Root Mean Square Error


#### Mean Square Log Error



#### r2 Score




#### Accuracy Score




#### Empty Matrix


#### Confusion Matrix


#### Recall




#### Precision




#### f1_Score




#### Classification Report