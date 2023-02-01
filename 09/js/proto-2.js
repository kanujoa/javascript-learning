function newBook(title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
}

// 함수 밖에서 프로토타입을 사용해 생성자 함수의 메서드를 정의하기

newBook.prototype.finish = function() {
  this.done === false ? str = "읽는 중" : str = "완독";
  return str;
}

const nBook1 = new newBook("웹 표준의 정석", 648, false);
const nBook2 = new newBook("점프 투 파이썬", 360, true);

console.log(nBook1, nBook1.finish());
console.log(nBook2, nBook2.finish());