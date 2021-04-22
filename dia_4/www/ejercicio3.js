'use strict';

const height = 5;

for (let lines = 0; lines < height; lines++) {
  let lineContent = '';

  for (let nums = 0; nums <= lines; nums++) {
    lineContent += nums + 1;
  }

  console.log(lineContent);
}
