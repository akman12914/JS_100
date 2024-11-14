/* -------------------------------------------------------------------------- */
/*                              문제46 : 각 자리수의 합 2                             */
/* -------------------------------------------------------------------------- */

let arr = [];

for (i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

let stringArr = [];

stringArr = arr.join("");

let answer = 0;

for (i = 0; i < stringArr.length; i++) {
  answer += +stringArr[i];
}

console.log(answer);
