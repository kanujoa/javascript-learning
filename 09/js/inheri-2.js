class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}

const book1 = new BookC("자료구조", 15000);
book1.buy();

// Book 클래스를 상속하는 TextbookC 클래스 생성하기
class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);     // 기존 클래스의 프로퍼티를 재사용
    this.major = major;     // 새로운 프로퍼티를 정의
  }

  buyTextbook () {     // 새로운 매서드를 정의
    console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextbookC("인공지능", 5000, "컴퓨터공학");
book2.buyTextbook();     // TextbookC 객체의 매서드 사용
book2.buy();     // BookC 객체의 메서드를 사용