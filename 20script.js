
const usdCurr = 29;
const eurCurr = 32;


function convert(amount, curr){ //DRY - dont repeat yourself 
    console.log(curr * amount);
}

convert(500,usdCurr);
convert(500,eurCurr);