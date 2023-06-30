let inch = prompt("cm로 변환하고 싶은 inch 값을 입력하세요.");

if (inch === null) {
  alert("사용자가 입력을 취소했습니다.");
}
else if (isNaN(parseFloat(inch))) {
  alert("올바른 형태로 값을 입력해 주세요.");
}
else {
  inch = parseFloat(inch);
  const cm = 2.54 * inch;
  const h2 = document.createElement("h2");
  const result = document.body.appendChild(h2);
  result.innerText = `${inch}inch를 cm로 변환한 결과는 ${cm}cm 입니다.`;
}