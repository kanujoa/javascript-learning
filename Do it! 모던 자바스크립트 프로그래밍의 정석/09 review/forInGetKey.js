// 예시 객체
const myPet = {
  name: 'Kanu',
  age: 7,
  speak: false,
  eat: ['fruit', 'grain', 'feed'],
};

// myPet 객체의 키 하나하나에 접근하여 출력하기
for (let key in myPet) {
  console.log(key);
}

// 접근한 키에 해당하는 값 출력하기
for (let key in myPet) {
  console.log(myPet[key]);
  // console.log(myPet.key); 는 사용 불가!
}

console.log(Object.keys(myPet));
console.log(Object.values(myPet));
console.log(Object.entries(myPet));
