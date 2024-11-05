/* -------------------------------------------------------------------------- */
/*                           문제35 : Factory 함수 사용하기                           */
/* -------------------------------------------------------------------------- */

function one(n) {
  function two(value) {
    let sum = 1;
    // console.log(sum);
    for (i = 0; i < n; i++) {
      sum *= value;
    }
    // console.log(sum);
    return sum;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
