// 2차원 콘텍스트 만들기

const canvas = document.querySelector('canvas'); // 캔버스 영역을 가져온다.
const ctx = canvas.getContext('2d'); // 2차원 콘텍스트를 생성한다.

ctx.fillStyle = 'rgb(200, 0, 0)'; // 사각형 내부를 채울 색깔
ctx.fillRect(10, 10, 50, 100); // 그려질 사각형의 좌표 (ctx.fillRect(start_x, start_y, end_y, end_y))
// 캔버스 영역의 왼쪽 위 구석이 원점(0, 0)이고, 오른쪽으로 갈수록 x 좌푯값이, 아래쪽으로 갈수록 y좌푯값이 점점 더 커진다.
// 반대로 갈수록 -가 된다.
