let x = 10;
let sum = x + y;
let y = 20;
console.log(sum);

// let이나 const를 사용할 경우 var에서와 달리 변수를 사용하기 전에 사용하면 오류가 발생함. (Uncaught ReferenceError: Cannot access 'y' before initialization)
// 따라서 변수 선언보다 변수 사용 소스가 먼저 오는 상황을 고칠 수 있음.