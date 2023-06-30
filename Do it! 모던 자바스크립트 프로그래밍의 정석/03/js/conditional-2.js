// 단순히 사용자가 값을 입력했는지의 여부를 확인하기 위한 코드 (입력값이 없는데 확인을 누르면 내용이 없는 알림창이 뜬다.)

const userInput = prompt("이름을 입력하세요.");

if (userInput !== null) {
  alert(userInput);
}