## Metrics

***This docs include all the scores and errors***, it help's to find the data is working or not

#### Squared Error

Suqared error is the distance between the predicted value and the actual value and then we will do summitation of the all the values.

<img src="" width="26" height="20">

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


#### Mean Absolute Error


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