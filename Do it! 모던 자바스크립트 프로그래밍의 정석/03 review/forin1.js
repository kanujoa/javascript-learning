const parrot = {
  name: "kanu",
  age: 7,
  species: "cockatiel",
  speak: false,
};

for (let info in parrot) {
  document.write(`${info}: ${parrot[info]}<br>`);
}
