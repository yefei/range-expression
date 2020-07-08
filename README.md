# range-expression

demo

```js
const rangeExpression = require('range-expression');

console.log('out:', rangeExpression('VIP-[A-d]-([1-100])', 100, exclude=['C','a',4]))

/*
out:
[ 'VIP-A-(1)',
  'VIP-A-(2)',
  'VIP-A-(3)',
  'VIP-A-(5)',
  'VIP-A-(6)',
  'VIP-A-(7)',
  'VIP-A-(8)',
  'VIP-A-(9)',
  'VIP-A-(10)',
  'VIP-C-(1)',
  'VIP-C-(2)',
  'VIP-C-(3)',
  'VIP-C-(5)',
  'VIP-C-(6)',
  'VIP-C-(7)',
  'VIP-C-(8)',
  'VIP-C-(9)',
  'VIP-C-(10)',
  'VIP-D-(1)',
  'VIP-D-(2)',
  'VIP-D-(3)',
  'VIP-D-(5)',
  'VIP-D-(6)',
  'VIP-D-(7)',
  'VIP-D-(8)',
  'VIP-D-(9)',
  'VIP-D-(10)' ]
*/
```
