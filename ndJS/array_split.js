import Math from 'mathjs'

function array_split(array, split_units=0){
    const split_array = []
    var value = Math.floor(array.length/split_units)
    if((array.length % split_units) === 0){
        for (let i = 0; i < split_units; i++) {
            split_array.push([])
            for (let j = 0; j < value; j++) {
                split_array[i].push(array.shift())
            }
        }
        return split_array
    }else{
        console.log(`Valueerror: The array is ${array.length % split_units} the number shoud be '=0' not '>0'`)
    }
}

export {array_split}