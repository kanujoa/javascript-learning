let userInput = prompt("이름을 입력하시오.");

if (userInput === null) {     // 취소 버튼 클릭
  alert("취소했습니다.");
}
else {     // 확인 버튼 클릭
  alert(userInput);
}

// 단지 사용자가 값을 입력했는지의 여부를 확인하기 위한 것이면 if 문 하나만 사용해서 입력값이 null이 아닐 경우를 체크한다.
// let userInput = prompt("이름을 입력하시요.");

// if (userInput !== null) {
//   alert(userInput);
// }