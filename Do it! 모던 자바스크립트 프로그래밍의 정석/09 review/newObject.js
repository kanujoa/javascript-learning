// 빈 객체 생성
let myPet = new Object();

// 빈 객체에 프로퍼티 추가
myPet.name = 'Kanu';
myPet.age = 7;
myPet.speak = false;
myPet.eat = ['fruit', 'grain', 'feed'];

// console.log(myPet);

// 프로퍼티 삭제
delete myPet['age'];
delete myPet.speak;
