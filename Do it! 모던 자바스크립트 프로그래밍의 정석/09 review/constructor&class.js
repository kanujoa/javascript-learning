// 생성자 함수 정의하기
function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = '';
    this.done === false ? (str = '읽는 중') : (str = '완독');
    return str;
  };
}

// let book1 = new Book('돈키호테', 1000, false);
// let book2 = new Book('경제공부', 300, true);

// console.log(book1);
// console.log(book2);
// console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
// console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);

// 클래스로 정의하기
class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  finish() {
    let str = '';
    this.done === false ? (str = '읽는 중') : (str = '완독');
    return str;
  }
}

let book1 = new Book2('돈키호테', 1000, false);
let book2 = new Book2('경제공부', 300, true);

console.log(book1);
console.log(book2);
console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);
