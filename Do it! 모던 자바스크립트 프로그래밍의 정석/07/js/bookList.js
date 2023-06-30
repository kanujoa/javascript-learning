const saveButton = document.querySelector("#save");
const cancelButton = document.querySelector("#cancel");
const container = document.querySelector("#container");
const books = document.querySelector("#books");

const title = document.querySelector("#title");
const author = document.querySelector("#author");

function handleList() {
  if (title.value === "" || author.value === "") {
    alert("제목과 작가 모두 입력해 주세요");
  } else {
    const createUl = document.createElement("ul");
    const bookList = books.appendChild(createUl);
    
    const createDiv = document.createElement("div");
    const bookInfo = bookList.appendChild(createDiv);
    bookInfo.id = "book-info";
    bookInfo.innerText = `${title.value} - ${author.value}`;
    
    const createButton = document.createElement("button");
    const removeButton = bookList.appendChild(createButton);
    removeButton.id = "remove";
    removeButton.innerText = '삭제';
    
    title.value = "";
    author.value = "";    
    
    const removeButtons = document.querySelectorAll("#remove");      // removeButtons는 함수 밖에서는 생성되어 있지 않은 상태이므로 함수 밖에서의 활용이 불가
    for (let rmButton of removeButtons) {
      rmButton.addEventListener("click", function () {  
        this.parentNode.remove(this);
      })
    }
  }
} 

function cancelInput() {
  title.value = "";
  author.value = "";
}

saveButton.addEventListener("click", handleList);
cancelButton.addEventListener("click", cancelInput);