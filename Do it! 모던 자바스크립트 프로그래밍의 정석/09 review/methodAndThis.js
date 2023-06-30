const myPet = {
  name: 'Kanu',
  age: 7,
  speak: false,
  eat: ['fruit', 'grain', 'feed'],
  canSpeak: function () {
    this.speak === true
      ? console.log(`${this.name}는 말을 할 수 있습니다.`)
      : console.log(`${this.name}는 말을 할 수 없습니다.`);
  },
};

myPet.canSpeak();
