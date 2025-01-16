let numOne = 0;

for (i = 1; i <= 1000; i++) {
  let num = String(i);
  if (num.includes("1")) {
    numOne++;
  }
}

console.log(numOne);
