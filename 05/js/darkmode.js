const bttn = document.querySelector("button");

bttn.onclick = function() {
  document.body.classList.toggle("dark");     // 버튼을 클릭할 때마다 .dark 스타일을 토글한다.
}

// 토클(toggle): 클릭할 때마다 특정 클래스를 추가하거나 삭제하기를 반복한다.