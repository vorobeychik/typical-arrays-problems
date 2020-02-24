
exports.min = function min (array) {
    if(  array === undefined  || array.length === 0){return 0}
    else{
    let min = 100;
    for(let i of array){
        if( i < min){
            min = i
        }

    }
    return min;}
}

exports.max = function max (array) {
    if(  array === undefined  || array.length === 0){return 0}
    let max = -100;
    for(let i of array){
        if( i > max){
            max = i
        }

    }
    return max;
}

exports.avg = function avg (array) {
    if(  array === undefined  || array.length === 0){return 0}
    let sum = 0;
    for(let i of array){
     sum += i;
    }
  return sum/array.length;
}
