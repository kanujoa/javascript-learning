// break를 사용한 코드 (내 코드)
// let n = +prompt('1보다 큰 자연수를 입력해 주세요.', 2);

// for (let i = 2; i <= n; i++) {
//   let flag = 1;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       flag = 0;
//       break;
//     }
//   }
//   if (flag) alert(i);
// }

// 레이블을 사용한 코드
let n = +prompt('1보다 큰 자연수를 입력해 주세요.', 2);

nextPrime: for (let i = 2; i <= n; i++) {
  // 2 이상 n 이하의 수인 n에 대한 반복문을 돌림
  for (let j = 2; j < i; j++) {
    // i를 나눌 수인 j에 대한 반복문을 돌림
    if (i % j === 0) continue nextPrime; // 소수가 아인 경우 다음 i로 넘어감.
  }
  alert(i); // 소수 출력
}
