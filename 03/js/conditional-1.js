// 사용자가 취소 버튼을 클릭하면 취소했다고 알려주고, 클릭하지 않고 이름을 입력하면 입력한 이름을 알림 창에 표시하는 코드

const userInput = prompt("이름을 입력하세요.");

if (userInput === null) {
  alert("사용자가 입력을 취소했습니다.");
} else {
  alert(userInput);
}