let score = prompt("프로그래밍 점수 : ");

if (score != null) {     // 프롬프트 창에 값을 입력했을 때만 실행문이 실행된다.
  if (parseInt(score) >= 90) {
    alert("A 학점");
  }
  else if (parseInt(score) >= 80) {
    alert("B 학점");
  }
  else {
    alert("C 학점");
  }
}