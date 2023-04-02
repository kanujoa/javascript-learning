let userInput = prompt("숫자를 입력하세요.");

if (userInput !== null) {
  const userNumber = parseInt(userInput);     
  (userNumber % 2 === 0) ? alert(`${userNumber} : 짝수`) : alert((`${userNumber} : 홀수`));
}