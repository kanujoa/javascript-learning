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

function getLocal() {     // localStorage에 자료가 있는지 확인 후 내용이 있으면 가져와서 화면에 보여 주는 함수
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {     // todos의 요소가 되는 todo들마다 아래 함수에 적혀 있는 코드를 반복
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;     // localStorage의 값을 표시한다. (여기서의 todo는 인자로 들어온 todo, 즉 todos 리스트에 있는 요소를 말한다.)
    newDiv.appendChild(newTodo);

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";
    completeButton.classList.add("complete");
    newDiv.appendChild(completeButton);
    const removeButton = document.createElement("button");
    removeButton.innerText = "삭제";
    removeButton.classList.add("remove");
    newDiv.appendChild(removeButton);

    todoList.appendChild(newDiv);
    todoInput.value = "";
  });
}

function manageTodo(e) {     
  const whichButton = e.target.classList[0];      // 클릭한 부분의 class명(classList에서 0번 인덱스임.)을 가져온다. (e.target은 이벤트가 일어난 부분의 html 코드를 반환한다.)
  if (whichButton === "complete") {      // [완료] 버튼이면
    const todo = e.target.parentElement;     // 처리해야 할 대상(todo)은 click 이벤트가 일어난 버튼의 부모 요소임.
    todo.children[0].classList.toggle("completed-todo");     // 부모 요소(div)의 첫 번째 자식(li, 할 일 내용 부분)에 .complete 클래스 스타일을 토글함.
  } else if (whichButton === "remove") {     // [삭제] 버튼이면    
    const todo = e.target.parentElement;     // [삭제] 버튼의 부모 요소를 todo에 할당
    removeLocal(todo);     // [삭제] 버튼의 부모 요소를 삭제한다. (removeLocal은 아래에 내가 직접 만든 함수!)
    todo.remove();     // 화면에서도 todo를 삭제한다. (todo에는 div가 할당되어 있으므로 div가 삭제되면서 li, button 모두 같이 사라지게 됨.)
  }
}

function removeLocal(todo) {     // [삭제] 버튼의 부모 요소(div)가 todo에 할당되었다.    
  let todos;     // 로컬 스토리지에서 가져온 할 일들이 될 것이다.
  if (localStorage.getItem("todos") === null) {
    todos = []; 
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const index = todos.indexOf(todo.children[0].innerText);     // 삭제할 일의 인덱스를 localStorage의 todo 리스트에서 찾기
  todos.splice(index, 1);     // index 번째 요소를 삭제한다.
  localStorage.setItem("todos", JSON.stringify(todos));     // 변경된 todos를 저장한다.
}

// 이벤트 처리
document.addEventListener("DOMContentLoaded", getLocal);     // 페이지가 모두 로드되었을 때 로컬 스토리지에 있는 내용 가져오기
form.addEventListener("submit", addTodo);
todoList.addEventListener("click", manageTodo);     // 완료, 삭제 버튼은 할 일 목록에 포함되어 있으므로 todoList에 click 이벤트 정의