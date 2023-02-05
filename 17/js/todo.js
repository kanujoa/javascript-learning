const form = document.querySelector("form");
const ul = document.querySelector("ul");

function addToDo(event) {
  event.preventDefault();
  
  const createLi = document.createElement("li");
  const li = ul.appendChild(createLi);
  
  const createP = document.createElement("p");
  const createCompleteButton = document.createElement("button");
  const createRemoveButton = document.createElement("button");
  const p = li.appendChild(createP);
  const completeButton = li.appendChild(createCompleteButton);
  const removeButton = li.appendChild(createRemoveButton);
  completeButton.innerText = "✅";
  removeButton.innerText = "❌";
  completeButton.className = "complete_button";     // classList.add("classname")으로도 작성 가능
  removeButton.className = "remove_button";

  const toDoInput = document.querySelector("input"); 
  p.innerText = toDoInput.value;
  saveToDo(toDoInput.value);      // local storage에 저장
  toDoInput.value = "";     // b = a.value;라고 했을 때 b = ""; 라고 적어주면 제대로 작동 X (옆처럼 a.value = ""; 이렇게 직접적으로 적어주어야 함.)
}

function saveToDo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {     // storage에 todos 키가 있는지 없는지 확인하기 (따옴표 꼭 작성하기! 없으면 빈 리스트 생성, 있으면 그에 대한 값을 그대로 가져옴. 가져온 후에 아래의 코드를 통해 local storage에 새 todo 추가)
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);     // 새 todo todos 리스트에 추가하기 (push 메서드이므로 인자가 들어가야 하는 것을 기억!)
  localStorage.setItem("todos", JSON.stringify(todos));     // local storage에 수정된 todos 반영하기
}

function getLocal() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));     // 스토리지에서 todos 값을 가져옴.
  }

  todos.forEach(function(todo) {     // todo 요소마다 반복하기기
  const createLi = document.createElement("li");
  const li = ul.appendChild(createLi);
   
  const createP = document.createElement("p");
  const createCompleteButton = document.createElement("button");
  const createRemoveButton = document.createElement("button");
  const p = li.appendChild(createP);
  const completeButton = li.appendChild(createCompleteButton);
  const removeButton = li.appendChild(createRemoveButton);
  p.innerText = todo;
  completeButton.innerText = "✅";
  removeButton.innerText = "❌";
  completeButton.className = "complete_button";     
  removeButton.className = "remove_button"; 

  const toDoInput = document.querySelector("input"); 
  toDoInput.value = "";     
  });

  let completed;     // 새로고침 이후에도 css(line-through) 유지를 위한 작업
  if (localStorage.getItem("completed") === null) {
    completed = [];
  } else {
    completed = JSON.parse(localStorage.getItem("completed"));
  }

  const p = document.querySelectorAll("p");
  completed.forEach(function(completedtodo){
    for (let index = 0; index < p.length; index++) {     // for (변수 정의; 조건; 증감식) 이 순서인 것을 기억하기!!
      if (p[index].innerText === completedtodo) {
        p[index].classList.add("completed");
      }
    }
  })
}

function removeLocal(todo) {     // 여기에 인자로 들어가는 todo는 <li> 묶음이다.
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todos.indexOf(todo.children[0].innerText);     // 삭제할 할 일의 idndex (todos 리스트에서 todo(<li> 묶음) text가 몇 번째 index인지를 알아야 한다.)
  todos.splice(todoIndex, 1);     // index 번째 요소를 삭제
  localStorage.setItem("todos", JSON.stringify(todos));

  let completed;
  if (localStorage.getItem("completed") === null) {
    completed = [];
  } else {
    completed = JSON.parse(localStorage.getItem("completed"));
  }

  const completedIndex = completed.indexOf(todo.children[0].innerText);
  completed.splice(completedIndex, 1);
  localStorage.setItem("completed", JSON.stringify(completed)); 
}

function manageToDo(event) {
  const whichButton = event.target.classList[0];     // 클릭한 부분의 클래스명을 가져옴.
  if (whichButton === 'complete_button') {     // 클릭한 것의 class가 complete_button이면 (완료 버튼을 클릭하면)
    const toDoContainer = event.target.parentElement;     // button의 부모 태그인 li를 정의
    toDoContainer.children[0].classList.toggle("completed");     // li의 자식 요소 중 첫번째(p)에 .completed 스타일을 토글함.

    const todosText = document.querySelectorAll("p");     // line-through 스타일이 적용된 것들을 localStorage에 저장함. (새로고침 이후에도 css 유지를 위한 작업)
    let completed = [];
    todosText.forEach(function (todoText) {
    if (todoText.classList[0] === "completed") {
      completed.push(todoText.innerText);
      localStorage.setItem("completed", JSON.stringify(completed));
    }
    }); 
  } else if(whichButton === "remove_button") {     // 클릭한 부분의 class가 delete_button이면 (삭제 버튼을 클릭하면)
    const toDoContainer = event.target.parentElement;
    removeLocal(toDoContainer);     // 화면에서도 지우고 localstorage에서도 삭제함. (removeLocal 함수의 인자로 toDoContainer를 넣음으로써)
    toDoContainer.remove();
  }
}

document.addEventListener("DOMContentLoaded", getLocal);
form.addEventListener("submit", addToDo);
ul.addEventListener("click", manageToDo);