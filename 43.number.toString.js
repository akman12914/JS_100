/* -------------------------------------------------------------------------- */
/*                              문제43: 10진수를 2진수로                              */
/* -------------------------------------------------------------------------- */

let n = +prompt("숫자를 입력하세요");

function demicalInvert(n) {
  let x = n.toString(2);
  return x;
}

console.log(demicalInvert(n));