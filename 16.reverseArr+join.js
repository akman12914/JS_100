let quote = "거꾸로";
let reverseQuote = [];

for (i = quote.length - 1; i >= 0; i--) {
  reverseQuote.push(quote[i]);
}

console.log(reverseQuote.join(""));
