// Count digits in a number
// const digits = 12345;

// const makingItAbsolute = Math.abs(digits);

// const numberOfCount = makingItAbsolute.toString().length

// console.log("given Number and number of digits-> ",digits,"->", numberOfCount)

// Reverse a number

// const numberToReverse = 12345;

// solution 1

// const splitedNumber = numberToReverse.toString().split('');


// let newNumberArray = [];

// for(let i = splitedNumber.length - 1; i >= 0; i--){
  
//     newNumberArray.push(splitedNumber[i]);
// }

// console.log(newNumberArray)

// const reversedNumber = newNumberArray.join('')
// console.log("given Number -> ",numberToReverse,"reversedNumber",Number(reversedNumber))


// solution 2 

// const reversedNumber = numberToReverse.toString().split('').reverse().join('')

// console.log("reversed number",parseInt(reversedNumber,10))


// Check if a number is Palindrome or Not

// const givenNumber = 121;

// number and reversed number should be equal to be a palindrome

// const reversedNumber = Number(givenNumber.toString().split('').reverse().join(''))

// console.log("given Nunber",givenNumber)
// if(givenNumber === reversedNumber){
//     console.log("it is a palindrome")
// } else {
//     console.log("it is not a palindrome")
// }

// Find GCD of two numbers

// const number1 = 11;
// const number2 = 13;
// let gcdNumber;

// // 4 and 8 -> so i need to find out the greatest number that divides both number1 and number2

// for(let i = 1 ; i <= Math.min(4,8); i++){
//     if(number1 % i === 0 && number2 % i === 0){
//         gcdNumber = i;
//     }
// }

// console.log("gcdNumber",gcdNumber)

// Check if a number is Armstrong Number or not

// const number = 153;

// const splitedNumber = Math.abs(number).toString().split('');

// console.log(splitedNumber)
// let isArmStrongNumber = 0;
// splitedNumber.forEach(number => {
//     isArmStrongNumber += Math.pow(number,splitedNumber.length);
// })

// if(number === isArmStrongNumber){
//     console.log("yes it is an armstrong number")
// } else {
//     console.log("no, it is not an armstrong number")
// }
// // another solution

// const length = splitedNumber.length;

// const isarm = splitedNumber.reduce((acc,digit) => acc + Math.pow(digit,length),0)
// console.log(isarm)

// Print all Divisors of a given Number

// const number = 97;
// let divisors = []
// for(let i = 1; i <= number; i++){
//     if(number % i === 0){
//         divisors.push(i);
//     }
// }

// console.log("divisors -> ",divisors);

// Check if a number is prime or not
// const number = 11;
// let isPrimeNumber = true;
// for(let i =2 ; i < number; i++){
//    if(number % i === 0){
   
//     isPrimeNumber = false
//    } 
// }

// console.log(isPrimeNumber === true ? 'It is a prime numner' : 'It is not a prime number')
