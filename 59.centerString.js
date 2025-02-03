const str = prompt("문자열을 입력해주세요.");

const n = 25 + parseInt(str.length / 2, 10);

const a = str.padStart(n, "=");

console.log(a.padEnd(50, "="));
