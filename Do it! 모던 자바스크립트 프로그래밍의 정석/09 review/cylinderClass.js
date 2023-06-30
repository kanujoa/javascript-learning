// 클래스로 정의하기
class Cylinder {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }

  getVolume = function () {
    let radius = this.diameter / 2;
    return (radius ** 2 * this.height * Math.PI).toFixed(2);
  };
}

const btn = document.querySelector('button');

function showVolume() {
  const diameter = document.querySelector('#diameter').value;
  const height = document.querySelector('#height').value;
  if (isNaN(parseFloat(diameter)) || isNaN(parseFloat(height))) {
    alert('숫자로 값을 모두 입력하세요.');
  } else {
    const userCylinder = new Cylinder(parseFloat(diameter), parseFloat(height));
    const result = document.getElementById('result');
    result.innerText = `원기둥의 부피는 ${userCylinder.getVolume()} 입니다.`;
  }
}

btn.addEventListener('click', showVolume);
