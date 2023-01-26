const elements = document.querySelectorAll("*");

for (let element of elements) {
  element.addEventListener("click", e => 
  console.log(`evnet.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`), true);     
}     // true를 추가해 이벤트 버블링을 이벤트 캡쳐링으로 바꾸었다.