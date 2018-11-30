
## How to Install:
To install and launch project run these commands in console:
```
npm install
npm run start
```
## Test Task

This is a test task for Vortexads. Write a single page application that consist of two blocks. The first in problem definition as a plain text. The second block contains input field and submit button.



Problem definition:



A non-empty array A consisting of N integers. Each elements of array A represent a cars on a road.

Array A contains only zero or one:

0 represents a car traveling east ( to the right on the X axis),
1 represents a car traveling west ( to the left  on the X axis),


You should  count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.



For example, consider array A = [0,1,0,1,1]  of 5 cars. We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).



Requirements:



As an enduser I should be able to type numbers separated by commas to input field. After submission second block disappears and I can observe either result or validation error.

It’s totally up to you how to format the text. Put all array example and cars pairs from task description to blocks of code snippets. (See any documentation on GitHub for inspiration).

Validation rule: input should be non empty line with numbers separated by commas.  Show an error message above the input field.