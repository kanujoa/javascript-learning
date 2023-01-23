// 사용자에게 1보다 큰 수를 입력하게 한 후 입력한 숫자까지 짝수만 더하는 프로그램
let wrongInput = true;

while (wrongInput) {
  const userInput = prompt("1보다 큰 숫자를 입력하세요.");
  const intInput = parseInt(userInput);
  if (userInput === null) {
    alert("사용자가 입력을 취소하였습니다.");
    wrongInput = false;
  }
  else if (isNaN(intInput) || intInput <= 1 || intInput !== parseFloat(userInput)) {
    alert("1보다 큰 자연수를 입력 후 제출 바랍니다.");
  } 
  else {
    let sum = 0;
    for (i = 1; i <= userInput; i++) {
      if (i % 2 === 0) {     // 짝수일 경우만 과정 화면에 표시(홀수일 경우는 건너뛰기)
        sum += i
        document.write(`${i} ----- ${sum}<br>`);
      }
    }
    wrongInput = false;
  }
}
