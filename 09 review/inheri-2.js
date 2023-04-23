class Join {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    document.write(`${this.name}님,<br>`);
  }
  welcome() {
    document.write('가입을 환영합니다!');
  }
}

class Info extends Join {
  constructor(name, tel, sms) {
    super(name);
    this.tel = tel;
    this.sms = sms;
  }
  recieveNews = function () {
    this.sms
      ? document.write(`${this.name}님은 ${this.tel} 으로 sms 수신에 동의하였습니다.`)
      : document.write(`${this.name}님은 sms 수신에 동의하지 않으셨습니다.`);
  };
}

const member = new Info('Andy', `010-7777-7777`, false);
console.log(member.name);
console.log(member.tel);
console.log(member.sms);
console.log(member.age);

member.showName();
member.welcome();
member.recieveNews();
