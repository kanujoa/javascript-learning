const inch = parseFloat(prompt("인치 값을 입력하세요."));   
// 입력 시 "36inch" 이렇게 문자열과 같이 입력해도 parseFloat를 통해 수 부분만 결과로 반환된다.
const cm = (inch * 2.54).toFixed(1)

const h3 = document.querySelector("h3");
if (isNaN(inch)) {
  alert("값을 입력해 주세요.");
} else {
  h3.innerText = `${inch}inch를 cm로 변환한 결과는 ${cm}cm입니다.`;
}