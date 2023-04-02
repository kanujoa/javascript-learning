let score1 = prompt("첫번째 학생의 점수를 입력하세요.");
let score2 = prompt("두번째 학생의 점수를 입력하세요.");

if (score1 !== null && score2 !== null) {
  score1 = parseInt(score1);
  score2 = parseInt(score2);
  if (score1 >= 80 && score2 >= 80) {
    alert("두 학생 모두 통과입니다!")
  }
  else if (score1 >= 80 || score2 >= 80) {
    alert("한 학생만 통과입니다.");
  }
  else {
    alert("두 학생 모두 실패입니다.");
  }
}