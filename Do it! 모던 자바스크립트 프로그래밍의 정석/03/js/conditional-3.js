const score = prompt("성적을 입력하세요.");     // 여기에 parseInt를 적용하고 시작하면 null이 나오지 않으므로 값 입력 여부(취소 여부)를 확인할 수 없음.
// parseInt(null) 의 값은 NaN임.


if (score !== null) {     // 값을 입력했을 때만 실행됨. (취소 버튼을 누르면 실행 안됨. 값을 작성하지 않고 확인 버튼을 누르면 실행이 되는데, else에 충족됨.)
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