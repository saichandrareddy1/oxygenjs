import Math from 'mathjs'

function Linspace(startvalue, endvalue, numberofsteps, endpoint=true) {
    var linspace_array = [startvalue]
    if(endpoint){
        var steppingval = (endvalue - startvalue) / (numberofsteps-1)
        var dummyval = startvalue
        for(var i=startvalue; i < startvalue+numberofsteps-1; i++){
            dummyval = dummyval + steppingval
            linspace_array.push(dummyval)
        }
        return linspace_array
    }else{
        var steppingval = (endvalue - startvalue) / (numberofsteps)
        var dummyval = startvalue
        for(var i=startvalue; i < startvalue+numberofsteps-1; i++){
            dummyval = dummyval + steppingval
            linspace_array.push(Math.round(dummyval, 2))
        }
        return linspace_array
    }
}
// var a = Linspace(2, 3, 5, false)
// console.log(a)
export {Linspace}