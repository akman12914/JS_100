let [koreanScore, mathScore, scienceScore] = prompt("입력: ").split(" ");

let sum = Math.floor(koreanScore) + Math.floor(mathScore) + Math.floor(scienceScore);
let average = Math.floor(sum / 3);

console.log("출력 : " + average);

/* -------------------------------------------------------------------------- */
/*                            답안 비교 : 배열 사용법 염두에 두기                           */
/* -------------------------------------------------------------------------- */

// const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
// let sum = 0;

// for (let i=0; i<3; i++){
//   sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
// }

// console.log(Math.floor(sum/3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.
