const color = ["#e4efe9", "#e9e4ef", "#e9e4ef", "#e4eaef", "#e5d2e9"];

for (i = 0 ; i < color.length ; i++) {
  var craeteH1 = document.createElement("h1");
  var h1 = document.body.appendChild(craeteH1)
  h1.innerText = `My favorite color is ${color[i]}`;
  h1.style = `background-color: ${color[i]};`;
  var createBr = document.createElement("br");
  var br = document.body.appendChild(createBr);
}