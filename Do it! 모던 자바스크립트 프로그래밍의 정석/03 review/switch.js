let num = prompt("1부터 3까지의 숫자 중 하나를 입력하세요.");

if (num !== null) {
  num = parseInt(num);
  switch(num) {
    case 1: alert("낙첨입니다.");
      break;
    case 2: alert("당첨입니다!");
      break;
    case 3: alert("낙첨입니다.");
      break;
    default: alert("1, 2, 3 중 하나의 숫자를 입력하세요.");
  }
}
else {
  alert("취소하셨습니다.");
}