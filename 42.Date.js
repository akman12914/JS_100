/* -------------------------------------------------------------------------- */
/*                                문제42 : 2020년                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                    삽질기록                                    */
/* -------------------------------------------------------------------------- */

// let a = 5;
// let b = 24;

// const array1st = [],
//   array2st = [],
//   array3st = [],
//   array4st = [],
//   array5st = [],
//   array6st = [],
//   array7st = [],
//   array8st = [],
//   array9st = [],
//   array10st = [],
//   array11st = [],
//   array12st = [];

// const j = 0;
// let last = 0;

// for (i = 0; i < 31; i++) {
//   last = j;
//   array1st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 29; i++) {
//   last = j;
//   array2st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 31; i++) {
//   last = j;
//   array3st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }

// console.log(last);
// console.log(j);

// for (i = 0; i < 30; i++) {
//   last = j;
//   array4st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 31; i++) {
//   last = j;
//   array5st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 30; i++) {
//   last = j;
//   array6st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 31; i++) {
//   last = j;
//   array7st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 31; i++) {
//   last = j;
//   array8st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 30; i++) {
//   last = j;
//   array9st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 31; i++) {
//   last = j;
//   array10st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 30; i++) {
//   last = j;
//   array11st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }
// last < 6 ? (j = last + 1) : (j = 0);
// for (i = 0; i < 31; i++) {
//   last = j;
//   array12st[i] = week[j];
//   j++;
//   if (j == 7) j = 0;
// }

// const month = [array1st, array2st, array3st, array4st, array5st, array6st, array7st, array8st, array9st, array10st, array11st, array12st];
//   const week = ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"];

// // console.log(month);

// function solution(a, b) {
//   if (a < 1 || a > 12) console.log("없는 달입니다.");
//   if (b < 1 || b > 31) console.log("없는 일수 입니다.");
//   console.log(a, "월", b, "일은", month[a][b], "요일입니다.");
// }

// solution(5, 24);

// let month = prompt("달을 입력하세요.");
// let day = prompt("일을 입력하세요");

/* -------------------------------------------------------------------------- */
/*                                Date 함수 이용 답안                               */
/* -------------------------------------------------------------------------- */

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const isDay = new Date("2020", a, b);
  return day[isDay.getDay()];
}

console.log(solution(5, 24));
