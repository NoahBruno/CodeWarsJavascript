// //Initiation
// //-------------------------------------------------------------
//
// function multiply(a, b){
//   return a * b
// }
//
// console.log(multiply(5,5))
//
// //Multiples of 3 and 5
// //----------------------------------------------------------------------------------------------
//
// function solution(number){
//   let sum= 0;
//   for(let j = 0; j < number; j++) {
//     if(j % 3 === 0){
//       sum+=j;
//       continue;
//     }else if(j % 5 === 0){
//       sum+=j;
//       continue;
//     }else{
//       continue;
//     }
//   }
//   return sum;
// }
// console.log(solution(30))
//
// //Array.diff
// //-------------------------------------------------------------------------------------
//
// function arrayDiff(a, b) {
//   let diff = a.filter(x => !b.includes(x));
//   return diff;
// }
// console.log(arrayDiff([1,2,2,2,2,3], [2,1]))
//
// //Find the odd int
// //-----------------------------------------------------------------------------------------
// function findOdd(A) {
//   //happy coding!
//   return 0;
// }
//
// //Exes and Ohs
// //----------------------------------------------------------------------------------------
//
// function XO(str) {
//   let xNumber = '';
//   let oNumber = '';
//   for (let i=0; i<str.length; i++) {
//     if (str[i].toLowerCase() === 'x') {
//       xNumber += str[i];
//     } else if (str[i].toLowerCase() === 'o') {
//       oNumber += str[i];
//     }
//   }
//   return xNumber.length === oNumber.length ;
// }
//
// console.log(XO("xooxxox"))
//
// //Mumbling
// //----------------------------------------------------------------------------------------
//
//
// function accum(s){
//   let array = []
//   for (let i =0; i < s.length; i++){
//     array.push(format(s[i], i +1))
//   }
//   return array.join('-');
// }
//
// function format(s, num){
//   let letter = s.toUpperCase()
//
//   while(letter.length !== num){
//     letter += s.toLowerCase()
//   }
//   return letter
// }
//
// console.log(accum("abcd"))
//
// //FizzBuzz
// //----------------------------------------------------------------------------
//
// function fizzbuzz(num){
//   for(let i =0 ; i <= num ; i++){
//     if (i % 3 === 0){
//       console.log(i + " fizz")
//     }else if (i % 5 === 0 ){
//       console.log(i + " buzz")
//     }else{
//       console.log(i)
//     }
//   }
//   return num
// }
//
// console.log(fizzbuzz(100))
//
// //rot13
// //---------------------------------------------------------------------------------
//
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let str = "";
// let empty = "";
//
// function rot13(message) {
//   for (let i = 0; i < message.length; i++) {
//     let letter = alphabet.filter(a => a === message[i]);
//     let newString = letter.toString();
//     console.log("L " + newString)
//     let newLetter = alphabet.findIndex(x => x === message[i]) + 13
//     if(newLetter ===  12){
//       str += newString
//     }
//     else if (newLetter > 26) {
//       let newNum = newLetter - 26;
//       let finalLetter = alphabet[newNum];
//       console.log(finalLetter)
//       str += finalLetter;
//     } else {
//       let oFinalLetter = alphabet[newLetter]
//       console.log(oFinalLetter)
//       str += oFinalLetter;
//     }
//   }
//   return (str)
// }
//
// console.log(rot13("hi there"))
//
// //------------------------------------------------------------------------
//
// decodeMorse = function(morseCode){
//   let result = [];
//   morseCode = morseCode.trim();
//   let data = morseCode.split( " ")
//
//   for(let i = 0; i < data.length; i++) {
//     let x = data[i].split(' ');
//     for(let j = 0; j < x.length; j++){
//       if(morseCode[x[j]]){
//         result.push(morseCode[x[j]]);
//       }
//     }
//     if (i !== data.length - 1){
//       result.push(' ');
//     }
//   }
//   return result.join('')
// }
// // isPangram
// //---------------------------------------------------------------------
//
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz"
//       .split("").every(function(x){
//         return string.indexOf(x) !== -1;
//       });
// }
//
// function maxSequenceSum( arr ) {
//   //Insert your code here
//   let maxSum = 0;
//
//   for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     maxSum += arr[i];
//     if(maxSum < 0){
//       maxSum=0
//     }
//
//
//   }
//   return maxSum;
// }
//
// console.log(maxSequenceSum([2,-1,3,4,-6]))

//------------------------------------------------------------------
// var uniqueInOrder=function(iterable){
//   //your code here - remember iterable can be a string or an array
//   let arr = []
//   for(let i = 0; i<iterable.length; i++){
//     if (iterable[i] !== iterable[i + 1]){
//       arr.push(iterable[i])
//     }
//   }
//   return arr;
//
// }
// console.log(uniqueInOrder("AABBCcAD"))

//=================================================================
//
// function countSheeps(arrayOfSheep) {
//   let count = 0;
//   for(let i = 0; i < arrayOfSheep.length; i++){
//     if(arrayOfSheep[i] === true){
//       count++
//     }
//   }return count
// }
//
// let arrayOfSheep= [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
//
// console.log(countSheeps(arrayOfSheep))
//
// function solution(digits){
//   let answer = 0;
//
//   for (let i=0; i < digits.length; i++){
//     let num = digits.substr(i, 5);
//     if(Number(num) > answer){
//       answer=Number(num)
//     }
//   }
//   return answer
// }
//
// console.log(solution("8273654637"))

// function factorial(x){
//   let fct =1
//   if(x == 0){
//     return 1
//   }
//   for(let i = 1; i <= x; i++)
//     fct*=i;
//     return fct
// }
//
// console.log(factorial(25))
//is palindrome codewars
// function isPalindrome(l){
//   let x = l.split("").reverse().join("");
//   return x == l;
// }
//
// console.log(isPalindrome("racecar"))
//
// function moveZeros(a){
//     let zerosArr = a.filter(num => num === 0)
//     let nonZeroArr = a.filter(num => num !== 0)
//     return nonZeroArr.concat(zerosArr)
// }
//
// console.log(moveZeros([false,1,0,3,5,0,"b"]))
//
//Square (n) Sum
function squareSum(numbers){
    let n = 0
    for(let i = 0; i < numbers.length; i++){
        let newNum = Math.pow(numbers[i], 2)
        n += newNum
    }
    return n

}

console.log(squareSum([1,5,3]))