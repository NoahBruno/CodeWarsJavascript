//Initiation
//-------------------------------------------------------------

function multiply(a, b){
  return a * b
}

console.log(multiply(5,5))

//Multiples of 3 and 5
//----------------------------------------------------------------------------------------------

function solution(number){
  let sum= 0;
  for(let j = 0; j < number; j++) {
    if(j % 3 === 0){
      sum+=j;
      continue;
    }else if(j % 5 === 0){
      sum+=j;
      continue;
    }else{
      continue;
    }
  }
  return sum;
}
console.log(solution(30))

//Array.diff
//-------------------------------------------------------------------------------------

function arrayDiff(a, b) {
  let diff = a.filter(x => !b.includes(x));
  return diff;
}
console.log(arrayDiff([1,2,2,2,2,3], [2,1]))

//Find the odd int
//-----------------------------------------------------------------------------------------
function findOdd(A) {
  //happy coding!
  return 0;
}

//Exes and Ohs
//----------------------------------------------------------------------------------------

function XO(str) {
  let xNumber = '';
  let oNumber = '';
  for (let i=0; i<str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      xNumber += str[i];
    } else if (str[i].toLowerCase() === 'o') {
      oNumber += str[i];
    }
  }
  return xNumber.length === oNumber.length ;
}

console.log(XO("xooxxox"))

//Mumbling
//----------------------------------------------------------------------------------------


function accum(s){
  let array = []
  for (let i =0; i < s.length; i++){
    array.push(format(s[i], i +1))
  }
  return array.join('-');
}

function format(s, num){
  let letter = s.toUpperCase()

  while(letter.length !== num){
    letter += s.toLowerCase()
  }
  return letter
}

console.log(accum("abcd"))

//FizzBuzz
//----------------------------------------------------------------------------

function fizzbuzz(num){
  for(let i =0 ; i <= num ; i++){
    if (i % 3 === 0){
      console.log(i + " fizz")
    }else if (i % 5 === 0 ){
      console.log(i + " buzz")
    }else{
      console.log(i)
    }
  }
  return num
}

console.log(fizzbuzz(100))