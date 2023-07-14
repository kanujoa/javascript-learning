// 내 제출
// do {
//   var userInput = prompt('100보다 큰 숫자를 입력하세요.', '');
// } while (+userInput <= 100 && userInput !== null && userInput !== '');

// 정답
let num; // num은 let 예약어로 반복문 밖에서 미리 선언해 줌.

do {
  num = prompt('100을 초과하는 숫자를 입력해 주세요.', 0);
} while (num <= 100 && num); // num이 100보다 작거나 같은 경우나 값 자체가 true인 경우 중 하나라도 거짓이 되면 반복문 종료
