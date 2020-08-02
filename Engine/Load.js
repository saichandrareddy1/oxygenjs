import fs from 'fs';
function loadTxt(fn) {
  let all = fs.readFileSync(fn, "utf8");  // giant string
  all = all.trim();  // strip final crlf in file
  let lines = all.split("\n");
  var array = []
  var arra_fin = []
  for(var i =0; i<=lines.length-1; i++){
    array.push(lines[i]);
    //console.log(lines[i], i);
  }

  for(var i=0; i<=array.length-1;i++){
    var splitted = array[i].split(',')
    arra_fin.push(splitted)
  }
  return arra_fin
}

export default loadTxt


