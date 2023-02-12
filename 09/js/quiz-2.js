// 1. class를 이용해 객체 만들고 상속하기

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run = function() {
    alert(`${this.color} color ${name} is running.`);
  }
}

class Cat extends Animal {     // 기존 클래스인 Animal을 상속하는 새로운 클래스인 Parrot을 생성함.
  constructor(name, color, species) {
    super(name, color);     // 기존 클래스의 프로퍼티를 그래도 사용
    this.species = species;     // 새로운 프로퍼티 추가
  }

  viewInfo() {
    alert(`이름 : ${this.name}, 품종 : ${this.species}, 색깔 : ${this.color}`);
  }
}

const tom = new Cat("톰", "회색", "브리티쉬 쇼트헤어");
tom.viewInfo();

// 2. 생성자 함수를 이용해 객체 만들고 상속하기

function Pet(name, color) {
  this.name = name;
  this.color = color;
  this.run = function () {     // 메서드의 경우 Pet 객체 밖에서 'Pet.prototype.run = function() {alert~}' 이런 식으로도 적어줄 수 있다.
    alert(`${this.color} color ${this.name} is running.`);
  }
} 

function myPet(name, color, species) {
  Pet.call(this, name, color);     // 기존 객체의 프로퍼티를 재사용하는 방식으로 상속 가능
  this.species  = species;     // 상속된 것에 새로운 프로퍼티 추가
}

myPet.prototype.viewInfo = function() {     // 상속된 것에 새로운 메서드 추가
  alert(`이름 : ${this.name}, 품종 : ${this.species}, 색깔 : ${this.color}`);
}

const kanu = new myPet("카누", "노란색", "왕관앵무");     // 인스턴스 생성 시 new 예약에 쓰는 것 잊지 말기!
kanu.viewInfo();