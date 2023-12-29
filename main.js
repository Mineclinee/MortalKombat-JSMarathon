let firsName;

firsName = 'Scorpion';

console.log(firsName);
console.log('John' + function() {});
console.log('John' + undefined);
console.log('John' + null);
console.log('John' + [1,2,3]);

console.log('John' + {a: 1, b: 2})

console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0

console.log('' + 5); // 5 (string)
console.log(+'10'); // 10 (number)
console.log(!!'someString'); // true (boolean)
