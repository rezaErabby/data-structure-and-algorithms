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