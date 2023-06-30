// 원의 넓이 구하기
function area(r) {
  return Math.PI * (r ** 2);
}

// 원의 둘레 구하기
function circum(r) {
  return Math.PI * 2 * r;
}

const results = document.querySelectorAll(".setting");     // 결괏값을 표시할 부분
const radius = prompt("반지름의 크기는?");

// 소수점 이하 셋째 자리까지 표시하기
// results[0].innerText = `반지름 : ${radius}`;
// results[1].innerText = `원의 넓이 : ${area(radius).toFixed(3)}`;     // 소수점 고정을 하고 싶지 않으면 toFixed를 쓰지 않으면 된다.
// results[2].innerText = `원의 둘레 : ${circum(radius).toFixed(3)}`;


// 결괏값 반올림하기
results[0].innerText = `반지름 : ${radius}`;
results[1].innerText = `원의 넓이 : ${Math.round(area(radius).toFixed(3))}`;
results[2].innerText = `원의 둘레 : ${Math.round(circum(radius).toFixed(3))}`;