

function Det(array) {
    return (array[0][0] * array[1][1]) - (array[0][1] * array[1][0])
}

function invDet(array) {
    var val = 1/(Det(array))
    return [[val*array[1][1], -(array[0][1])*val], [-(array[1][0])*val, val*array[0][0]]]
}

export {Det, invDet}


