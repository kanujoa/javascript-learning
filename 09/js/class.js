class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    let str = "";
    this.done === false ? str = "읽는 중" : str = "완독";
    return str;
  }
}

let book1 = new Book2("웹 표준의 정석", 648, false);
let book2 = new Book2("점프 투 파이썬", 360, true);

console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);