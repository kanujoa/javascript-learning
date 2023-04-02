const agree = confirm("위치 정보 수집에 동의하십니까?");

if (agree === false) {
  alert("동의하지 않으셨습니다.");
}
else {
  alert("동의하셨습니다.");
  document.write("location");
}