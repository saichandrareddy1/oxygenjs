## Metrics

***This docs include all the scores and errors***, it help's to find the data is working or not


* Metrics
    * [SquareError](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#squared-error)
    * [MeanSquaredError](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#mean-square-error)
    * [MeanAbsoluteError](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#mean-absolute-error)
    * [RootMeanSquareError](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#root-mean-square-error)
    * [MeanSquareLogError](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#mean-square-log-error)
    * [r2_Score](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#r2-score)
    * [AccuracyScore](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#accuracy-score)
    * [EmptyMatrix](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#empty-matrix)
    * [ConfusionMatrix](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#confusion-matrix)
    * [Recall](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#recall)
    * [Precision](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#precision)
    * [f1_Score](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#f1_score)
    * [Classification_report](https://github.com/saichandrareddy1/OxygenJS/blob/master/Docs/metrices.md#classification-report)


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


<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/rmsle.png" width="600" height="150">

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

R^2 (coefficient of determination) regression score function. Best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a R^2 score of 0.0.[Read More...](https://stackoverflow.com/questions/23309073/how-is-the-r2-value-in-scikit-learn-calculated)


<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/r2.png" width="600" height="150">

importing the r2_score function (y_test=[], y_pred=[])

```js
import { r2_score } from "./Engine/metrics.js";
```

inputs to the functions 

```js
var y_test = [0.2, 0.3, .22, .44, .111, .532, .45]
var y_pred = [.333, .222, .444, .2, .33, .111, .333]


var score = r2_score (y_test, y_pred)
console.log(score)
```

:point_right: Output

```js

-1.560040 // mean squared log Error

```
:point_right: **y_test parameter** is the array and testing data                              
:point_right: **y_pred parameter** is the array and predicting data


#### Accuracy Score

Classification accuracy is our starting point. It is the number of correct predictions made divided by the total number of predictions made, multiplied by 100 to turn it into a percentage [Read More...](https://machinelearningmastery.com/classification-accuracy-is-not-enough-more-performance-measures-you-can-use/)

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/acc.png" width="600" height="150">

Importing the accuracy score function (y_test=[], y_pred=[])

```js
import {accuracy_score} from "./Engine/metrics.js";
```

inputting the data to the function

```js
var y_test = [1, 0, 1, 1, 0, 0, 0, 0, 1]
var y_pred = [1, 1, 0, 1, 0, 1, 1, 0, 0]
var acc_score = accuracy_score(y_test, y_pred)
console.log(acc_score)
```

:point_right: Output

```js

0.4444 // accuracy score

```
:point_right: **y_test parameter** is the array and testing data                              
:point_right: **y_pred parameter** is the array and predicting data


#### Empty Matrix


#### Confusion Matrix

A confusion matrix is a table that is often used to describe the performance of a classification model (or “classifier”) on a set of test data for which the true values are known. It allows the visualization of the performance of an algorithm. [Read More...](https://en.wikipedia.org/wiki/Confusion_matrix)

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/cm.png" width="600" height="150">

Importing the confusion Matrix function (y_test=[], y_pred=[])

```js
import {confusion_matrix} from "./Engine/metrics.js";
```

inputting the data to the function

```js
var y_test = [1, 0, 1, 1, 0, 0, 0, 0, 1]
var y_pred = [1, 1, 0, 1, 0, 1, 1, 0, 0]
var confusion_ma = confusion_matrix(y_test, y_pred)
console.table(confusion_ma)
```

:point_right: Output

```js

┌─────────┬───┬───┐
│ (index) │ 0 │ 1 │
├─────────┼───┼───┤
│    0    │ 2 │ 3 │
│    1    │ 2 │ 2 │
└─────────┴───┴───┘

```
:point_right: **y_test parameter** is the array and testing data                              
:point_right: **y_pred parameter** is the array and predicting data


#### Recall

In pattern recognition, information retrieval and classification (machine learning), precision (also called positive predictive value) is the fraction of relevant instances among the retrieved instances, while recall (also known as sensitivity) is the fraction of the total amount of relevant instances that were [Read More...](https://en.wikipedia.org/wiki/Precision_and_recall)


<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/recall.png" width="600" height="150">

Importing the recall function (values=[])

```js
import {confusion_matrix, recall} from "./Engine/metrics.js";
```

inputting the data to the function

```js
var y_test = [1, 0, 1, 1, 0, 0, 0, 0, 1]
var y_pred = [1, 1, 0, 1, 0, 1, 1, 0, 0]
var confusion_ma = confusion_matrix(y_test, y_pred)
var val = recall(confusion_ma)
console.table(val)
```

:point_right: Output

```js

┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  0.5   │
│    1    │  0.4   │
└─────────┴────────┘

```
:point_right: **Value parameter** is the confusion matrix values                             


#### Precision

Precision - Precision is the ratio of correctly predicted positive observations to the total predicted positive observations. The question that this metric answer is of all passengers that labeled as survived, how many actually survived? High precision relates to the low false positive rate.[Read More...](https://en.wikipedia.org/wiki/Precision_and_recall)

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/pre.png" width="600" height="150">

Importing the precision function (values=[])

```js
import {confusion_matrix, precision} from "./Engine/metrics.js";
```

inputting the data to the function

```js
var y_test = [1, 0, 1, 1, 0, 0, 0, 0, 1]
var y_pred = [1, 1, 0, 1, 0, 1, 1, 0, 0]
var confusion_ma = confusion_matrix(y_test, y_pred)
var val = precision(confusion_ma)
console.table(val)
```

:point_right: Output

```js

┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  0.5   │
│    1    │  0.4   │
└─────────┴────────┘

```
:point_right: **Value parameter** is the confusion matrix values                             


#### f1_Score

In statistical analysis of binary classification, the F1 score is a measure of a test's accuracy. ... The general formula for positive real β, where β is chosen such that recall is considered β times as important as precision, is: F β = ( 1 + β 2 ) ⋅ p r e [Read More...](https://en.wikipedia.org/wiki/F1_score)

<img src="https://github.com/saichandrareddy1/OxygenJS/blob/master/images/f1.png" width="600" height="150">

Importing the f1score function (values=[])

```js
import {confusion_matrix, f1score} from "./Engine/metrics.js";
```

inputting the data to the function

```js
var y_test = [1, 0, 1, 1, 0, 0, 0, 0, 1]
var y_pred = [1, 1, 0, 1, 0, 1, 1, 0, 0]
var confusion_ma = confusion_matrix(y_test, y_pred)
var val = f1score(confusion_ma)
console.table(val)
```

:point_right: Output

```js

┌─────────┬────────────────────┐
│ (index) │       Values       │
├─────────┼────────────────────┤
│    0    │ 0.4444444444444445 │
│    1    │ 0.4444444444444445 │
└─────────┴────────────────────┘

```
:point_right: **Value parameter** is the confusion matrix values                             


#### Classification Report
The classification report shows a representation of the main classification metrics on a per-class basis. This gives a deeper intuition of the classifier behavior over global accuracy which can mask functional weaknesses in one class of a multiclass problem.

Importing the classification_report function (values=[])

```js
import {confusion_matrix, classification_report} from "./Engine/metrics.js";
```

inputting the data to the function

```js
var y_test = [1, 0, 1, 1, 0, 0, 0, 0, 1]
var y_pred = [1, 1, 0, 1, 0, 1, 1, 0, 0]
var confusion_ma = confusion_matrix(y_test, y_pred)
var val = classification_report(confusion_ma)
console.log(val)
```

:point_right: Output

```js

---------------------------------------
| Class | Precision | Recall | F1score |
---------------------------------------
|   0   | 0.40      | 0.50   | 0.44    |
|   1   | 0.50      | 0.40   | 0.44    |
---------------------------------------

```
:point_right: **Value parameter** is the confusion matrix values                             



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