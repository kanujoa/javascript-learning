const yearInput = document.querySelector("#year");
const monthInput = document.querySelector("#month");     // 월, 일 입력 시 01, 05 이런 형태로 입력해도 문제 없음.
const dayInput = document.querySelector("#day");

const form = document.querySelector("form");
const result = document.querySelector("#result_box");
const current = document.querySelector("#current");
const passedDaysResult = document.querySelector("#passed_days");
const passedHrResult = document.querySelector("#passed_hr");


function showcurrentTime() {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const currentMonth = currentTime.getMonth() + 1;     // month는 0부터 시작하므로 +1을 해주어야 한다.
  const currentHr = currentTime.getHours();
  const currentMin = currentTime.getMinutes();
  
  current.innerText = `${currentYear}년 ${currentMonth}월 ${currentHr}시 ${currentMin}분 현재`;
}

function passedTime() {
  const currentTime = new Date();
  const birthday =  new Date(yearInput.value, monthInput.value - 1, dayInput.value);     // month 1 빼주는 것 기억하기! (1 빼주는 식을 적으려면 쉼표로 구분해서 적는 방법을 사용해야 한다.)
  const passedTimeFrom1970ToCurrent = currentTime.getTime();     // ms로 표시되는 것 기억!
  const passedTimeFrom1970ToBirthday = birthday.getTime();
  
  const passedHr = (passedTimeFrom1970ToCurrent - passedTimeFrom1970ToBirthday) / (1000 * 60 * 60);
  const passedDays = passedHr / 24;
  
  passedDaysResult.innerText = `날짜로는 ${Math.floor(passedDays)} 일이 흐르고`
  passedHrResult.innerText = `시간으로는 ${Math.floor(passedHr)} 시간이 흘렀습니다.`
}

function main(event) {
  event.preventDefault();
  let year = yearInput.value;
  let month = monthInput.value;
  let day = dayInput.value;
  if (year === '' || month === '' || day === '') {     // 입력값이 제대로 입력되었는지 검증하는 과정
    alert("연, 월, 일 모두 입력해 주세요.")
  } else if (year < 0 || month < 0 || day < 0 || month > 12 || day > 31) {
    alert("범위에 벗어나지 않는 값을 입력해 주세요.");
    yearInput.value = "";     // input에 입력한 값을 초기화시킬 때는 year, month, day 같은 input의 value를 담은 변수를 사용하면 안 되고 옆처럼 .value를 직접 적어주어야 한다.
    monthInput.value = "";
    dayInput.value = "";
  } 
  else {
    result.className = "result";
    showcurrentTime();
    passedTime();
  }     
}

form.addEventListener("submit", main);