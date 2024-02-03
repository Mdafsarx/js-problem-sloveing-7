// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd;

function odd_even(num){
    
    
    if(num % 2 ===0){
return 'the '+num+"  is even"
    }
    else{
        return `number is odd ${num}`
    }



}
const number=parseInt('8');
const output=odd_even(number)
console.log(output)