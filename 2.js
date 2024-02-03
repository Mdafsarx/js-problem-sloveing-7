// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function multiply_divide(number){


    if(number % 2 !==0){
        return number * 2
    }
    else{
        const ans=number / 2;
        return ans;
    }

}
const output=multiply_divide(10)
console.log(output)