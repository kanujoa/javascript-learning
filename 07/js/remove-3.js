const buttons = document.querySelectorAll("p > span");     // 모든 삭제 버튼 가져오기

for (let button of buttons) {
  button.addEventListener("click", function () {     // 항목(버튼)을 클릭했을 때 실행할 함수
    this.parentNode.remove(this);     // 부모 노드에서 삭제한다. (this는 클릭한 대상(버튼)을 가리킴.)
  });
}