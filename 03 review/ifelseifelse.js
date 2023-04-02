let time = prompt("결승선 통과에 걸린 시간(s)을 입력하세요.");

if (time !== null) {
  time = parseInt(time);
  if (time >= 20) {
    alert("탈락입니다.");
  }
  else if (time >= 10) {
    alert("장려상입니다.");
  }
  else if (time > 0) {
    alert("우수상입니다.");
  }
  else {
    alert("0 초과의 수로 입력하세요.");
  }
}
else {
  alert("취소하셨습니다.");
}