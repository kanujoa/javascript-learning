const orderButton = document.querySelector("#order");     // [주문하기] 버튼
const orderInfo = document.querySelector("#orderInfo");     // 주문 정보 영역
const title = document.querySelector("#container > h2");     // 책 제목 요소

orderButton.addEventListener("click", () => {
  let newP = document.createElement("p");     // p 요소 노드 만들기
  let textNode = document.createTextNode(title.innerText);     // 텍스트 노드 만들기
  newP.appendChild(textNode);     // 텍스트 노드를 p 요소 노드에 추가하기
  newP.style.fontSize = "0.8rem";
  newP.style.color = "blue";
  orderInfo.appendChild(newP);     // p 요소를 orderInfo 영역에 추가하기
}, {once : true});     // 옆의 코드를 추가하면 click 이벤트가 여러 번 발생해도 이벤트 리스너는 딱 한번만 실행된다.