
function ndSearchSort(array, valuetosearch) {
    if(valuetosearch){
        array = array.sort()
        for (let i = 0; i < array.length; i++) {
            if(array[i] === valuetosearch){
                console.log(i)
            };
        }
    }
}
// var array = [[2, 3, 4, 5], [1, 2, 3, 4]]
// ndSearchSort(array, 5)
export {ndSearchSort}