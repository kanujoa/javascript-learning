const participant = document.querySelector("#name");
const major = document.querySelector("#major");
const form = document.querySelector("#userInput");
const tbody = document.querySelector("tbody");

function handleRigister(event) {
  event.preventDefault();
  const createtr = document.createElement("tr");
  const tr = tbody.appendChild(createtr);
  const createNameTd = document.createElement("td");
  const createMajorTd = document.createElement("td");
  const nameTd = tr.appendChild(createNameTd);
  const majorTd = tr.appendChild(createMajorTd);
  nameTd.innerText = `${participant.value}`;
  majorTd.innerText = `${major.value}`;
  participant.value = "";
  major.value = "";
}

form.addEventListener("submit", handleRigister);