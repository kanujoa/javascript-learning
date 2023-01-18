function add(a, b) {
  return a + b;
}

let sum = add(10, 20);
console.log(sum);
let sum = 100;     // error 발생: Uncaught SyntaxError: Identifier 'sum' has already been declared

// variable-1 예시에서 var 자리에 let이나 const 예약어를 사용하는 경우에는 오류가 발생하므로 변수 재선언을 허용하지 않음.
// let 변수는 값을 변경할 수 있으므로 재할당 가능 (but 위처럼 재선언은 불가)
// const 변수는 재선언, 재할당 모두 불가능