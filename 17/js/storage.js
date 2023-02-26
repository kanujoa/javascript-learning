// 1. 로컬 스토리지에 저장
let students = ["Kim", "Lee", "Park"];
// localstorage에 키 "students"와 값(JSON 형식으로 바꾼 students) 저장
localStorage.setItem("students", JSON.stringify(students));   

// 2. 로컬 스토리지에 값 추가 (로컬 스토리지에서 값을 가져온 후 값 추가한 다음 다시 저장해야 함.)
let localData;     // localStorage에서 가져올 데이터를 저장할 변수 생성
if (localStorage.getItem("students") === null) {     // 스토리지에 students 키가 있는지 확인하고 없으면 
  localData = [];     // 가져올 데이터 없음. (빈 리스트 저장)
} else {     // storage에 students 키가 있으면 
  localData = JSON.parse(localStorage.getItem("students"));     // localStorage에서 students 키에 대한 값을 가져와 배열 형태로 바꾸고 그 값 저장
}
localData.push("Choi");      // 값 Choi 추가
localStorage.setItem("students", JSON.stringify(localData));     // localStorage에 새롭게 추가된 값이 있는 리스트를 JSON 형식으로 바꾸어 저장하기 
// (추가되는 것이 아니라 기존 값을 새로운 값으로 업데이트하는 것임.)

// 3. 로컬 스토리지에서 특정 값 삭제하기 
// (위의 localData와 현재 localStorage에 있는 값이 같으므로 localData 이용, 인덱스를 찾아 그 부분만 삭제한다.)
const indexOfValue = localData.indexOf("Lee");     // 인덱스 탐색
localData.splice(indexOfValue, 1);     // 인덱스에 해당하는 값 1개만 삭제
localStorage.setItem("students", JSON.stringify(localData));     // localStorage에 다시 저장

// 4. 로컬 스토리지에서 특정 키 삭제
localStorage.removeItem("students");
// clear() 메서드는 removeItem 메서드와 다르게 로컬 스토리지 전체를 지운다.