// switch문 사용해 보기
let subject = prompt("신청할 과목을 선택하세요. 1-HTML, 2-CSS, 3-Javascript");     // 사용자가 입력할 때에는 숫자만 입력해야지 switch문에서의 case에 제대로 해당이 될 수 있다.

if (subject !== null) {
  switch(subject) {
    case "1": document.write("HTML을 신청했습니다.");     // case 문에서 값을 지정할 때 식을 사용할 수 없다.
      break;
    case "2": document.write("CSS를 신청했습니다.");
      break;
    case "3": document.write("Javascript를 신청했습니다.");
      break;
    default : document.write("잘못 입력했습니다. 다시 입력해 주세요.");
  }
}