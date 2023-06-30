const num1 = parseInt(prompt("첫 번째 양의 정수: "));     // 입력값을 양의 정수로 변환하기
const num2 = parseInt(prompt("두 번째 양의 정수: "));     // 입력값이 음의 정수로 변환하기
let str;

// And 연산을 사용하였으므로 둘 다 true여야지 결괏값이 true이다.
if (num1 % 2 === 0 && num2 % 2 === 0) {
  str = "두 수 모두 짝수입니다.";
} else {
  str = "짝수가 아닌 수가 있습니다.";
}

alert(str);