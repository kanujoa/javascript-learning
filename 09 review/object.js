const member = {
  name: '홍길동',
  age: 21,
  membershipTiers: 'Silver',
  region: '경기도 OO시 XX구',
  recentBought: ['양배추', '피망', '수건', '비누'],
  tel: {
    home: '031-XXX-XXXX',
    personal: '010-OOOO-OOOO',
  },
  receiveNotification: false,
};

// 프로퍼티에 접근
// console.log(member.name);
// console.log(member['age']);
// console.log(member.tel.home);
// console.log(member['receiveNotification']);

// 프로퍼티 수정
member.name = '임꺽정';
member.recentBought.push('로션');
member['receiveNotification'] = true;

// 프로퍼티 추가
member.point = '200p';
member['shoppingBasket'] = ['빗자루', '연필'];
