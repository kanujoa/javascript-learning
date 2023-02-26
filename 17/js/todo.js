// 웹 요소 가져오기
const todoInput = document.querySelector("input");     // 사용자 입력
const form = document.querySelector("form");     // 폼
const todoList = document.querySelector("#todo-list");     // 할 일 목록

function addTodo(e) {
  e.preventDefault();     // submit 이벤트의 기본 동작 취소
  
  // 새로운 내용(HTML) 추가
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newDiv.appendChild(newTodo);
  
  // 사용자가 입력란에 입력한 내용(todo 내용)을 localStorage에 저장한다. (todoInput.value를 ""로 바꾸기 전에 작성해야 정상적으로 작동!)
  saveToLocal(todoInput.value);

  // 내용의 오른쪽에 버튼을 추가
  const completeButton = document.createElement("button");
  completeButton.innerText = "완료";
  completeButton.classList.add("complete");
  newDiv.appendChild(completeButton);

  const removeButton = document.createElement("button");
  removeButton.innerText = "삭제";
  removeButton.classList.add("remove");
  newDiv.appendChild(removeButton);

  // newDiv <ul>에 추가 후 입력란 공란으로 만들기
  todoList.appendChild(newDiv);
  todoInput.value = "";
}

function saveToLocal(todo) {     // localStorage에 아무것도 안뜰 때는 localStorage.clear()를 하고 다시 실행해 보기
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 이벤트 처리
form.addEventListener("submit", addTodo);