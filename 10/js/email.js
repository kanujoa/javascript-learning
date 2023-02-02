// 1. @ 앞의 사용자 이름을 세 자리로 고정

const email = document.querySelector("#userEmail");     // 메일 주소 입력 부분
const button = document.querySelector("button");     // 버튼
const result = document.querySelector("#result");     // 결과 표시 영역

// button.addEventListener("click", function() {
//   let username, domain;

//   if (email.value !== "") {
//     username = email.value.split("@")[0];     // @ 기준으로 앞부분
//     username = username.substring(0, 3);     // username 중 3자리만 필요함.
//     domain = email.value.split("@")[1];     // @ 기준으로 뒷부분
//     result.innerText = `${username}...@${domain}`;     // 결과 표시
//     email.value = "";     // 텍스트 필드 지우기
//   } 
// });

// 2. 표시할 문자 개수를 고정하지 않고 사용자 이름 길이의 절반만 표시하기

button.addEventListener("click", function() {
  let username, domain, half;

  if (email.value !== "") {
    username = email.value.split("@")[0];     // @ 기준으로 앞부분
    half = username.length / 2;     // username의 길이를 절반으로 나누기
    username = username.substring(0, half + 1);     // username에서 절반으로 나눈 위치까지만 출력
    domain = email.value.split("@")[1];     // @ 기준으로 뒷부분
    result.innerText = `${username}...@${domain}`;     // 결과를 표시
    email.value = "";     // 텍스트 필드 지우기
  }
})