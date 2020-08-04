class ndArithmetic{
    Add = (array1, arra2) =>{
        var final_array = []
        for (let i = 0; i < array1.length; i++) {
            final_array.push([])
            for (let j = 0; j < array1[0].length; j++) {
                try {
                    final_array[i].push(array1[i][j] + arra2[i][j])
                } catch (error) {
                    return console.log(`ShapeError : Shapes must be same ${array1.length} !== ${array2.length}`)
                }
            }   
        }
        return final_array
    }
    Subract = (array1, arra2) =>{
        var final_array = []
        for (let i = 0; i < array1.length; i++) {
            final_array.push([])
            for (let j = 0; j < array1[0].length; j++) {
                try {
                    final_array[i].push(array1[i][j] - arra2[i][j])
                } catch (error) {
                    return console.log(`ShapeError : Shapes must be same ${array1.length} !== ${array2.length}`)
                }
            }   
        }
        return final_array
    }
    Multiply = (array1, arra2) =>{
        var final_array = []
        for (let i = 0; i < array1.length; i++) {
            final_array.push([])
            for (let j = 0; j < array1[0].length; j++) {
                try {
                    final_array[i].push(array1[i][j] * arra2[i][j])
                } catch (error) {
                    return console.log(`ShapeError : Shapes must be same ${array1.length} !== ${array2.length}`)
                }
            }   
        }
        return final_array
    }
    Division = (array1, arra2) =>{
        var final_array = []
        for (let i = 0; i < array1.length; i++) {
            final_array.push([])
            for (let j = 0; j < array1[0].length; j++) {
                try {
                    final_array[i].push(array1[i][j] / arra2[i][j])
                } catch (error) {
                    return console.log(`ShapeError : Shapes must be same ${array1.length} !== ${array2.length}`)
                }
            }   
        }
        return final_array
    }
    Module = (array1, arra2) =>{
        var final_array = []
        for (let i = 0; i < array1.length; i++) {
            final_array.push([])
            for (let j = 0; j < array1[0].length; j++) {
                try {
                    final_array[i].push(array1[i][j] % arra2[i][j])
                } catch (error) {
                    return console.log(`ShapeError : Shapes must be same ${array1.length} !== ${array2.length}`)
                }
            }   
        }
        return final_array
    }
    DivMod = (array1, arra2) =>{
        var final_array = []
        var mod_array = []
        for (let i = 0; i < array1.length; i++) {
            final_array.push([])
            mod_array.push([])
            for (let j = 0; j < array1[0].length; j++) {
                try {
                    final_array[i].push(array1[i][j] / arra2[i][j])
                    mod_array[i].push(array1[i][j] % arra2[i][j])
                } catch (error) {
                    return console.log(`ShapeError : Shapes must be same ${array1.length} !== ${array2.length}`)
                }
            }   
        }
        return [final_array, mod_array]
    }

    Power = (array1, arra2) =>{
        var final_array = []
        for (let i = 0; i < array1.length; i++) {
            final_array.push([])
            for (let j = 0; j < array1[0].length; j++) {
                try {
                    final_array[i].push(array1[i][j] ** arra2[i][j])
                } catch (error) {
                    return console.log(`ShapeError : Shapes must be same ${array1.length} !== ${array2.length}`)
                }
            }   
        }
        return final_array
    }

}

// var array1 = [
//     [1, 2],
//     [2, 3]
// ]

// var array2 = [
//     [1, 2],
//     [1, 2]
// ]

// var obj =new ndArithmetic()
// var arr = obj.Power(array1, array2)
// console.log(arr)


export {ndArithmetic}