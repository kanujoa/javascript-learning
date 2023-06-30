const title = document.querySelector("#title");

title.onclick = () => {
  if (!title.classList.contains("clicked")) {     // clicked 스타일이 없으면 
    title.classList.add("clicked");     // clicked 스타일을 추가한다.
  } else {     // clicked 스타일이 있으면
    title.classList.remove("clicked");     // clicked 스타일을 없앤다.
  }
}