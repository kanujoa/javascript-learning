const items = document.querySelectorAll("li");     // 모든 li 항목을 가져온다.

for (item of items) {     // item은 items 노드 리스트의 li를 가리킨다.
  item.addEventListener("click", function () {     // 항목을 클릭했을 때 실행할 함수
    this.parentNode.removeChild(this);     // this는 이벤트가 발생한 항목을 의미한다. (이벤트가 발생한 항목을 부모 노드에서 삭제한다.)
  });
}