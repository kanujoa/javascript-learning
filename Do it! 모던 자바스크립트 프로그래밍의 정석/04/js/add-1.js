function calcSum() {
  let sum = 0;
  for (let i = 1; i < 11; i++) {
    sum += i;
  }
  return sum
}

document.write(calcSum());