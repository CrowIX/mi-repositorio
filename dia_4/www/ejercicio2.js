'use strict';
let height = 6;

for (let i = 0; i < height; i++) {
  let row = '';
  for (let nums = 1; nums <= i + 1; nums++) {
    row += i + 1;
  }

  console.log(row);
}
