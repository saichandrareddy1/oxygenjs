

import fs from 'fs'
var textCount = (textFile, value) => {
    var a = fs.readFileSync(textFile, 'utf-8')
    var s = a.split(" ")
    var count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === value) {
            count++
        };
    }
    return count
}
// var obj = textCount('test.txt','invite')
// console.log(obj)

export {textCount}

