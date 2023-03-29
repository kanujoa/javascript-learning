const fah = prompt("섭씨 온도로 변환하고 싶은 화씨 온도를 입력하세요.");

if (fah === null) {
  alert("사용자가 입력을 취소하였습니다.");
}
else if (isNaN(parseFloat(fah))) {
  alert("화씨 온도를 입력해 주세요.")
}
else {
  const cel = (fah - 32) / 1.8;     
  const h2 = document.createElement("h2");     // 특정 소수점 자리까지 반올림하고 싶다면 toFixed() 함수를 사용하자.
  const result = document.body.appendChild(h2);
  result.innerText = `화씨 온도 ${fah}°F를 섭씨 온도로 변환한 결과는 ${cel}°C 입니다.`;
}