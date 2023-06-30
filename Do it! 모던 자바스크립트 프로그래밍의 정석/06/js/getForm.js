// 선택 목록에서 옵션을 선택하면 change 이벤트가 발생하고 그것에 따라 무엇을 선택했는지를 알려주는 displaySelect() 함수를 연결한 코드이다. 

const selectMenu = document.querySelector("#major");

function displaySelect() {
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert(`${selectedText}를 선택했습니다.`);
}

selectMenu.onchange = displaySelect;