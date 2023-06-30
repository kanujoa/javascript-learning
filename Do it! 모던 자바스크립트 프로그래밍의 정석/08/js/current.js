const displayDate = document.querySelector("#today");

const today = new Date();

const year = today.getFullYear();     // 연도
const month = today.getMonth() + 1;     // 월(0~11) + 1
const date = today.getDate();     // 날짜
const day1 = today.getDay();     // 요일(0~6)

let day2 = " ";     // 요일명을 저장할 변수

// 반환된 요일(숫자)를 체크해서 요일명을 지정한다.
switch(day1) {
  case 0:
    day2 = "일요일"; break;
  case 1:
    day2 = "월요일"; break;
  case 2:
    day2 = "화요일"; break;
  case 3:
    day2 = "수요일"; break;
  case 4:
    day2 = "목요일"; break;
  case 5:
    day2 = "금요일"; break;
  case 6:
    day2 = "토요일"; break;
}

displayDate.innerHTML = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day2}</span>`;

const displayTime = document.querySelector("#clock");     // 시간 표시 영역

let clock = () => {     // setInterval 함수에 인자로 넣기 위해 아래 코드들을 clock 함수의 실행문으로 넣어주었다.
  let current = new Date();     // 1초마다 초가 바뀌도록 인스턴스 만들기
  let hrs = current.getHours();     // 시간
  let mins = current.getMinutes();     // 분
  let secs = current.getSeconds();     // 초
  
  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  
  // 시간, 분, 초가 한 자리수일 경우 앞에 0 붙여주기
  hrs = (hrs < 10) ? "0" + hrs : hrs;
  mins = (mins < 10) ? "0" + mins : mins;
  secs = (secs < 10) ? "0" + secs : secs;

  displayTime.innerText = `${period} ${hrs} : ${mins} : ${secs}`;
}

setInterval(clock, 1000);     // 타이머처럼 1초마다 시간이 바뀌는 모습 확인 가능