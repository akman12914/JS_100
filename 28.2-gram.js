const chars = prompt("문자열을 입력하세요");

for (i = 0; i < chars.length - 1; i++) {
  console.log(chars[i] + "" + chars[i + 1]);
}
