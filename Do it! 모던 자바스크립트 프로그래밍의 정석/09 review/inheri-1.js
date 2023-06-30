function Join(name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    document.write(`${this.name} 님,<br>`);
  };
  this.welcome = function () {
    document.write(`가입을 환영합니다!`);
  };
}

// const member1 = new Join('Jane', 25);
// member1.showName();
// member1.welcome();

function Info(name, tel, sms) {
  Join.call(this, name);
  this.tel = tel;
  this.sms = sms;
}

Info.prototype.recieveNews = function () {
  this.sms
    ? document.write(`${this.name}님은 ${this.tel} 으로 sms 수신에 동의하였습니다.`)
    : document.write(`${this.name}님은 sms 수신에 동의하지 않으셨습니다.`);
};

Object.setPrototypeOf(Info.prototype, Join.prototype);

const info = new Info('Mark', '010-1234-1234', true);

// Info에 기재한 메서드와 프로퍼티 적용해 보기
console.log(info.name);
console.log(info.tel);
console.log(info.sms);
info.welcome();
info.recieveNews();

// Info에 기재하지 않은 Join의 메서드 적용해 보기
info.showName();
