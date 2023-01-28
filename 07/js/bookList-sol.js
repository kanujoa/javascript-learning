const title = document.querySelector("#title");     // '제목' 정보
const author = document.querySelector("#author");     // '저자' 정보
const save = document.querySelector("#save");     // '저장하기' 버튼
const bookList = document.querySelector("#bookList");     // 정보가 표시될 영역

save.addEventListener("click", (e) => {     // 저장하기 버튼을 클릭할 경우
  e.preventDefault();     // form의 버튼을 클릭했을 때 서버로 보내지 않게 함.
  const item = document.createElement("li");
  item.innerHTML = `     
  ${title.value} - ${author.value}
  <span class="delButton">삭제</span>
  `     // innerHTML을 이용해 추가하고 싶은 HTML 요소까지 편하게 적어줄 수 있음.
  bookList.appendChild(item);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll(".delButton");

  for (let delButton of delButtons) {
    delButton.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
    })
  }
})