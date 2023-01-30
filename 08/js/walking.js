const result = document.querySelector("#result");     // 결괏값을 표시할 부분
const firstDay = new Date("2021-07-01");     // 시작한 날
const today = new Date();

let passedTime = today.getTime() - firstDay.getTime();
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
result.innerText = passedDay;
