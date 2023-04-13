const fruits = ["apple", "grape", "strawberry"];

for (let fruit in fruits) {
  document.write(`${parseInt(fruit) + 1}: ${fruits[fruit]} `);
}
