const selectMenu = document.querySelector("#major");     // 선택 목록을 가져온다.

function displaySelect() {
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert(`[${selectedText}]를 선택했습니다.`);
}

selectMenu.onchange = displaySelect;     // 선택 목록에 함수를 연결할 때는 onchange를 사용한다. (버튼처럼 클릭할 때 click 이벤트, 선택 목록에서는 change 이벤트 사용!)