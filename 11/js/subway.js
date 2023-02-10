function* train() {     // 제너레이터 함수 정의
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "부발";
  yield "세종대왕릉";
  yield "여주";
}

let gyeonggang = train();     // 이터러블 객체 생성(경강선)

const button = document.querySelector("button");
const station = document.querySelector("#station");

button.addEventListener("click", () => {
  let current = gyeonggang.next();     // 위에서 만든 이터러블 객체의 각 번째의 값을 가져와서 current 객체로 넘겨야 함.
  if (current.done === false) {     // done 값이 false이면 객체의 값 끝까지 간 것이 아니므로
    station.innerText = current.value;     // 역 이름 표시
  } else {     // done 값이 true이면 객체의 값 끝까지 간 것이므로 
    station.innerText = "종점!";     // "종점!" 표시
    button.setAttribute("disabled", "disabled");     // setAttribute() 메서드를 사용해 HTML 요소의 속성을 지정할 수 있다. --> 버튼 비활성화 (element.setAttribute("attribute_name", "attribute_value"))
  }     // HTML에서는 disabled="disabled" 또는 그냥 disabled이라고 작성한다. but setAttribute에서는 속성 이름과 값을 모두 작성해야 한다.
});