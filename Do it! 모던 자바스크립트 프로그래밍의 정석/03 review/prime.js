const userInput = prompt("자연수를 입력해 주세요.");

if (userInput === null) {
  alert("사용자가 입력을 취소하였습니다.");
} else if (userInput === "") {
  alert("자연수 하나를 입력 후 확인을 눌러주세요.");
} else if (
  parseInt(userInput) !== parseFloat(userInput) ||
  parseInt(userInput) <= 0
) {
  alert("허가된 형태의 수만 입력하세요.");
} else {
  const number = parseInt(userInput);
  let isPrime = false;
  if (number === 1) {
    document.write("1은 소수가 아닙니다.");
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        document.write(`${number}는 소수가 아닙니다.`);
        primeNum = true;
        break;
      }
    }
    if (isPrime === false) {
      document.write(`${number}는(은) 소수입니다.`);
    }
  }
}
