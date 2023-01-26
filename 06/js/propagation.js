const elements = document.querySelectorAll("*");     // 모든 요소를 가져와서 elements에 저장한다.

for (let element of elements) {     // 모든 요소를 순회하면서 
  element.addEventListener("click", (e) => {     // click 이벤트가 발생하면 
    console.log(`event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`);
  })     // event.target인 태그 이름과 event.currentTarget인 태그 이름을 출력한다.
}