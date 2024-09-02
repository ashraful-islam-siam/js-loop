/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 **/
let n = 81;
let sum = 0;
while (n <= 131) {
  if (n % 2 === 1) {
    sum += n;
  }
  n++;
}

console.log(sum);

/***
 *

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let n2 = 206;
let sum2 = 0;

while (n2 <= 311) {
  if (n2 % 2 === 0) {
    sum2 += n2;
  }
  n2++;
}
console.log(sum2);

/*programming hero*/
