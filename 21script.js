const usdCurr = 29;
const discount = 0.9;

function convert(amount, curr){ //DRY - dont repeat yourself 
    return curr * amount;
    
}

function promotion(result){
    console.log(result * discount);
    
}

// convert(500,usdCurr);
const res = convert(500,usdCurr);
promotion(res);


function test(){
    for(let i=0; i < 5; i++){
        console.log(i);
        if(i ===3) return
    }
    console.log('Done');
}
test();


function doNothing() {};
console.log(doNothing() === undefined );