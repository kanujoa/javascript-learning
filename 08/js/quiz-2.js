const totalPeopleInput = document.querySelector("#total_people");
const pickPeopleInput = document.querySelector("#pick_people");
const pickButton = document.querySelector("#pick");
const removeButton = document.querySelector("#remove");
const resultBox = document.querySelector("#result");

function pickPeople(event) {
  event.preventDefault();
  const totalPeople = parseInt(totalPeopleInput.value);
  const pickPeople = parseInt(pickPeopleInput.value);

  if (isNaN(totalPeople) || isNaN(pickPeople) || parseFloat(totalPeopleInput.value) !== totalPeople || parseFloat(pickPeopleInput.value) !== pickPeople || totalPeople <= 0 || pickPeople <= 0) {
    alert("모든 입력란에 1 이상의 자연수를 입력해 주세요.");
  } else if (totalPeople < pickPeople) {
    alert("총 인원 수는 뽑는 인원 수보다 더 크거나 같아야 합니다.");
  } else {
    const totalPeopleList = [];     // 뽑기 대상 인원들 리스트 (입력한 전체 인원 수)
    const winnerList = [];     // 뽑힌 인원들 리스트 (입력한 뽑기 인원 수)
  
    for (let i = 1; i <= totalPeople; i++) {
      totalPeopleList.push(i);     
    }
    
    while (winnerList.length < pickPeople) {
      const index = Math.floor(Math.random() * totalPeopleList.length);     // 랜덤 '인덱스'를 구하는 것이므로 0부터 시작해야 하고 totalPeopleList의 요소의 개수보다 1이 작아야 한다.
      winnerList.push(totalPeopleList[index]);
      totalPeopleList.splice(index, 1);     
    }
  
    resultBox.innerText = `당첨자 : ${winnerList.join("번, ")}번`;      // let winner = ""; 이렇게 초깃값 설정해 놓고 winner += `${picked}번` 으로 작성해도 된다.
  }  
}

function remove(event) {
  event.preventDefault();

  totalPeopleInput.value = "";
  pickPeopleInput.value = "";
  resultBox.innerText = "";
}

pickButton.addEventListener("click", pickPeople);
removeButton.addEventListener("click", remove);