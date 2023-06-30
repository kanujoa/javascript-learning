// 방법 1. 생성자 함수로 정의하기

// function Cylinder(cylinderDiameter, cylinderHeight) {
//   this.diameter = cylinderDiameter;
//   this.height = cylinderHeight;

//   this.getVolume = function() {
//     let radius = this.diameter / 2;     // 반지름을 계산한다.
//     return (Math.PI * (radius ** 2) * this.height).toFixed(2);     // 부피를 계산한 후 반환한다.
//   };
// }

// let cylinder = new Cylinder(8, 10);     // 인스턴스 생성
// console.log(`원기둥의 부피는 ${cylinder.getVolume()}입니다.`);     // 결괏값 표시


// 방법 2. 클래스로 정의하기

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }

  getVolume = function() {
    let radius = this.diameter / 2;
    return (Math.PI * (radius ** 2) * this.height).toFixed(2);
  }
}

const button = document.querySelector("button");     // [계산하기] 버튼
const result = document.querySelector("#result");     // 결괏값 표시 영역

button.addEventListener("click", function(event) {
  event.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;     // 지름값
  const height = document.querySelector("#cyl-height").value;     // 높잇값

  if (diameter === "" || height === "") {
    result.innerText = "지름값과 높이값을 입력하세요.";
  }
  else {
    let cylinder = new Cylinder(parseInt(diameter), parseInt(height));     // 인스턴스 생성
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;     // 계산값 표시
  }
});