/* -------------------------------------------------------------------------- */
/*                               문제49 : 최댓값 구하기                               */
/* -------------------------------------------------------------------------- */

let n = prompt("공백으로 10개의 숫자를 구분해 넣으시오").split(" ");

const array = Array.from(n);

console.log(array);

let max = Number(array[0]);

for (i = 0; i < array.length; i++) {
  array[i] = Number(array[i]);

  if (array[i] > max) {
    max = array[i];
  }
}

console.log(max);
