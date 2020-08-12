## Metrics

***This docs include all the scores and errors***, it help's to find the data is working or not

#### Squared Error

Suqared error is the distance between the predicted value and the actual value and then we will do summitation of the all the values.

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/sse.png" width="600" height="150">

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

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/mse.png" width="600" height="150">

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

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/mae.jpg" width="600" height="150">

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
Root Mean Square Error (RMSE) is the standard deviation of the residuals (prediction errors). Residuals are a measure of how far from the regression line data points are; RMSE is a measure of how spread out these residuals are. In other words, it tells you how concentrated the data is around the line of best fit.[Read More...](https://www.statisticshowto.com/probability-and-statistics/regression-analysis/rmse-root-mean-square-error/#:~:text=Root%20Mean%20Square%20Error%20(RMSE)%20is%20the%20standard%20deviation%20of,the%20line%20of%20best%20fit.)


<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/rmse.png" width="600" height="150">

importing the root mean squared error function (y_test=[], y_pred=[])

```js
import { root_mean_squared_error} from "./Engine/metrics.js";
```

inputs to the functions 

```js
var y_test = [0.2, 0.3, .22, .44, .111, .532, .45]
var y_pred = [.333, .222, .444, .2, .33, .111, .333]


var root_mean_Error = root_mean_squared_error(y_test, y_pred)
console.log(root_mean_Error)
```

:point_right: Output

```js

0.2300434741 // root mean squared Error

```
:point_right: **y_test parameter** is the array and testing data
:point_right: **y_pred parameter** is the array and predicting data


#### Mean Square Log Error

In case of RMSLE, you take the log of the predictions and actual values. [Read More....](https://www.quora.com/What-is-the-difference-between-an-RMSE-and-RMSLE-logarithmic-error-and-does-a-high-RMSE-imply-low-RMSLE#:~:text=In%20case%20of-,Root%20Mean%20Squared%20Error%20(RMSE)%20and%20Root%20Mean%20Squared%20Logarithmic,model%20and%20the%20actual%20values.&text=In%20case%20of%20RMSLE%2C%20you,the%20predictions%20and%20actual%20values.)


<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/rmsle.jpg" width="600" height="150">

importing the mean squared log error function (y_test=[], y_pred=[])

```js
import { mean_squared_log_error} from "./Engine/metrics.js";
```

inputs to the functions 

```js
var y_test = [0.2, 0.3, .22, .44, .111, .532, .45]
var y_pred = [.333, .222, .444, .2, .33, .111, .333]


var mean_squared_Error = mean_squared_log_error(y_test, y_pred)
console.log(mean_squared_Error)
```

:point_right: Output

```js

0.04134814 // mean squared log Error

```
:point_right: **y_test parameter** is the array and testing data
:point_right: **y_pred parameter** is the array and predicting data

#### r2 Score




#### Accuracy Score




#### Empty Matrix


#### Confusion Matrix


#### Recall




#### Precision




#### f1_Score




#### Classification Report