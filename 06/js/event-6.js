const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
  alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);     // 현재 문서에서의 이벤트 발생 위치를 좌표로 반환한다.
});

function mouseMove(event) {
  console.log(`사용자의 마우스 위치는 (${event.pageX}, ${event.pageY}) 입니다.`)
}

box.addEventListener("mousemove", mouseMove);