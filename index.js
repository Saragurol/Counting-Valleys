function countingValleys( path) {
    let results = [];
    let isNegative = false;
    let isPositive = true;
    let counter = 0; // 1
    let sum = 0;
    for(let i = 0; i < path.length; i++){
        if(path[i] === "D"){
            results.push(-1);
        } else {
            results.push(1);
        }
    }
    for(let j = 0; j < results.length; j++){
        sum = sum + results[j]; // 0
        if(sum < 0 && isNegative === false){
            counter += 1;
            isNegative = true;
            isPositive = false;
        }
        else if(sum >= 0){
            isNegative = false;
            isPositive = true;
        }   
    }
    console.log('counter', counter)
    return counter;
}
// countingValleys('UDDDUDUU')
countingValleys('DDUUDDUDUUUD')
