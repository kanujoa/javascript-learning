// const myPet = {
//   name: 'Kanu',
//   age: 7,
//   eat: ['fruit', 'grain', 'feed'],
//   language: false,
//   speak: language ? `${this.name} can speak.` : `${this.name} can't speak.`,
// };

// 생성자 함수로 정의하기
const myPet = function (name, age, eat, language) {
  this.name = name;
  this.age = age;
  this.eat = eat;
  this.language = language;

  this.canSpeak = function () {
    const speak = this.language ? `${this.name} can speak.` : `${this.name} can't speak.`;
    return speak;
  };
};

// 클래스로 정의하기
// class myPet {
//   constructor(name, age, eat, language) {
//     this.name = name;
//     this.age = age;
//     this.eat = eat;
//     this.language = language;
//   }

//   canSpeak() {
//     const speak = language ? `${this.name} can speak.` : `${this.name} can't speak.`;
//     return speak;
//   }
// }

// 프로토타입 메서드
const myPet = function (name, age, eat, language) {
  this.name = name;
  this.age = age;
  this.eat = eat;
  this.language = language;
};

myPet.prototype.canSpeak = function () {
  const speak = this.language ? `${this.name} can speak.` : `${this.name} can't speak.`;
  return speak;
};

const pet1 = new myPet('Kanu', 7, ['fruit', 'grain', 'feed'], true);
console.log(pet1);
console.log(pet1.eat);
console.log(pet1.canSpeak());
