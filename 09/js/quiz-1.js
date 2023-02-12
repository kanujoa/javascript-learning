// Pet 클래스 만들기 (name, color 프로퍼티와 run() 메서드를 가지고 있음.)
class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {     // 원하는 동작은 함수에 다 적기     --> run = function() {alert~} 이런 식으로도 적어줄 수 있음. (함수를 실행하려면 똑같이 ()를 적어주어야 함.)
    alert(`${this.color} color ${this.name} is running.`);     
  }
}

let pet1 = new Pet("치즈", "brown");     // 인스턴스 객체 생성
let pet2 = new Pet("카누", "yellow");
pet1.run();     // 인스턴스 객체에서 run() 메서드 실행
pet2.run();