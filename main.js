
function sumOfMultiples(upToNum)
{
    let sum = 0;
   
    for(let x = 1; x < upToNum; x++)
    {
        //let tmp3 = 1/3;
        //let tmp5 = 1/5

        if(x % 3 == 0 || x % 5 == 0)
        { 
            sum += x;
        }  
    }

    return sum
}

const ans = sumOfMultiples(1000);
console.log(ans)



