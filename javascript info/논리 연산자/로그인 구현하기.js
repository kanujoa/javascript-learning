// Admin인지 확인하기
let checkUserName = prompt('사용자 이름을 입력해 주세요.');

const correctName = 'Admin';
const correctPassword = 'TheMaster';

if (checkUserName === null || checkUserName === '') {
  alert('취소되었습니다.');
} else if (checkUserName !== correctName) {
  alert('권한이 없는 사용자입니다.');
} else {
  // 비밀번호 확인하기
  let checkPassword = prompt('비밀번호를 입력해 주세요.');

  if (checkPassword === null || checkPassword === '') {
    alert('취소되었습니다.');
  } else if (checkPassword !== correctPassword) {
    alert('인증에 실패하였습니다.');
  } else {
    alert('환영합니다!');
  }
}
