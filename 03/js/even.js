const userInput = prompt("숫자를 입력해 주세요.");

const changeToFloat = parseFloat(userInput);

if (userInput === null) {     // 취소 버튼을 눌렀을 때 (null일 때)
  alert("사용자가 입력을 취소하였습니다.");
} 
else if (isNaN(changeToFloat)) {     // 값을 입력하지 않고 확인 버튼을 눌렀을 때 (값을 입력하지 않았을 때의 userInput을 console.log 해보면 그냥 공백으로 뜨지만(null 아님! 값 자체가 공백임.)
  alert("0 또는 양의 정수를 입력하여 제출해 주세요.");       // 그것을 parseFloat이나 parseInt 로 자료형 변환을 해서 console.log 해 보면 NaN이 뜸.
}      // 또한 문자열을 입력하였을 때에도 작동 가능함.
else if (parseFloat(userInput) !== parseInt(userInput)){     // 입력값이 소수일 경우(소수점 아래가 0이 아닐 경우)
  alert("소수점 아래의 숫자는 0만 입력 가능합니다.");     
}
else {
  if (changeToFloat % 2 === 0) {     // 입력값이 짝수일 때 (음수도 짝수가 가능하다.)
    const createH3 = document.createElement("h3");     // 이것은 요소를 생성하는 행위만 하는 함수이므로 
    document.body.appendChild(createH3);     // 위에서 생성된 h3를 body에 속하게 만들어 주기 위해서는 appendChild 함수도 같이 작성해야 한다.
    const h3 = document.querySelector("h3");
    h3.innerText = `${userInput}은 짝수입니다.`; 
  } 
  else if (changeToFloat % 2 !== 0) {     // 입력값이 홀수일 때 (음수도 홀수가 가능하다.)
    const createH3 = document.createElement("h3");
    document.body.appendChild(createH3);
    const h3 = document.querySelector("h3");
    h3.innerText = `${userInput}은 홀수입니다.`;
    console.log(userInput);
  } 
}