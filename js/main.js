function multiply(a, b){
  return a * b
}

console.log(multiply(5,5))

let array = [];

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

