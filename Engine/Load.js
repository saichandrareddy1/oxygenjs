import fs from 'fs';
function loadTxt(fn) {
  let all = fs.readFileSync(fn, "utf8"); 
  all = all.trim();  
  let lines = all.split("\n");
  var array = []
  var arra_fin = []
  for(var i =0; i<=lines.length-1; i++){
    array.push(lines[i]);
  }

  for(var i=0; i<=array.length-1;i++){
    var splitted = array[i].split(',')
    arra_fin.push(splitted)
  }
  return arra_fin
}

export default loadTxt


