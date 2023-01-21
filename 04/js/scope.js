// function addSum(n) {
//   var sum = 0;     // sum은 지역변수
//   for (var i = 1; i <= n; i++) {     // i도 지역변수
//     sum += i;
//   }
//   return sum;
// }

// var num = 3;     // num은 전역변수
// console.log(`1부터 ${num} 까지 더하면 : ${addSum(num)}`);     
// 우리가 얻어내길 원하는 결과는 sum으로 지역변수임. sum을 블록 스코프 밖에서 사용할 수 없으니 이 지역변수 값을 가져오기 위해서는 전역변수 num을 addSum 함수의 인자로
// 넣어주어 반환된 sum 값을 띄우면 됨.

function addSum(n) {
  let sum = 0;     // 지역변수 sum
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const num = 3;     // 전역변수 num
console.log(`1부터 ${num}까지 더하면 : ${addSum(num)}`);