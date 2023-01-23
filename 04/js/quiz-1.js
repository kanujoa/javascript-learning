let wrongInput = true;

while (wrongInput) {
  const userInput = prompt("숫자를 입력하세요.");
  const floatInput = parseFloat(userInput);     // Number가 아닌 parseFloat를 사용해야 하는 이유: Number를 사용하면 입력값을 입력하지 않았을 때 0으로 변환되는 반면 parseFloat은 NaN으로 반환된다. 
  
  if (userInput === null) {
    alert("사용자가 입력을 취소했습니다.");
    wrongInput = false;
  }
  else if (isNaN(floatInput)){     // 따라서 parseFloat을 사용했을 때만 이 조건이 만족될 수 있다.
    alert("숫자 형식으로 입력하세요.");
  }
  else {
    if (floatInput > 0){
      document.write(`${floatInput}은 양수입니다.`);
    } else if (floatInput === 0) {
      document.write(`${floatInput}은 양수도 음수도 아닌 0입니다.`);
    } else {
      document.write(`${floatInput}은 음수입니다.`);
    }
    wrongInput = false;
  }
}