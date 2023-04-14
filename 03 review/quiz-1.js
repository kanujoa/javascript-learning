const numArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const createH3 = document.createElement("h3");
const h3 = document.body.appendChild(createH3);
h3.innerText = `주어진 배열 : ${numArray}`;

for (num of numArray) {
  if (num > 10) {
    document.write(`${num}, `);
  }
}
