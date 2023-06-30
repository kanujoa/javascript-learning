const button = document.querySelector("#add-text");
const container = document.querySelector("#container");

button.addEventListener("click", () => {
  const createP = document.createElement("p");
  const text = document.createTextNode("Typescript");
  createP.appendChild(text);
  
  const js = document.querySelectorAll("p")[2];
  container.insertBefore(createP, js);     // js의 부모 노드가 body가 아니면 document.body.insertBefore을 사용할 수 없음. 부모 노드를 맨 앞에 적어 주어야 함.
}, {once : true});