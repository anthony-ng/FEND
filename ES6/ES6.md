# Front-End Web Developer Nanodegree Program

## JS Foundations
## ES6
### Let & Const
**let** when you plan to reassign new values to a variable, and
**const** when you don’t plan on reassigning new values to a variable.

### Template Literals
**Template Literals** (back-ticks ( `` ) instead of single / double quotes, placeholders using **${expression}**.
```
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
```

### Destructuring
**Destructuring** values from arrays / object
Check index of Array & property name of Object!
```
let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Tom'];
let [first, , third] = positions;
console.log(first, third) // Gabrielle Kate
```

```
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;
console.log(type, color, carat); //quartz rose 21.29
```

### Object literal shorthand
No need to map `key:value` in Object, and write `: function()`
```
let type2 = 'quartz';
let color2 = 'rose';
let carat2 = 21.29;
const gemstone2 = {
    type2,
    color2,
    carat2,
    calculateWorth() {
        // will calculate worth of gemstone based on type, color, and carat
    }
};
```

### Iteration
We can customize iterator with **iterable protocol**
In the past:
```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < 10; i++) {
    console.log(digits[i]);
}
```
```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
    console.log(digits[index]);
}
```
`Array.forEach()`

In ES6: **for...of loop**
The for...of loop will only loop over the values in the object, not properties.
```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
    if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
```
```
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (day of days) {
    console.log(day.charAt(0).toUpperCase() + day.slice(1));
}
```

### Spread Operator (...)
```
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
// Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities
```
```
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
// 2 3 5 7 11 13 17 19 23 29
```

In the past, we use `concat()`:
```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
// [ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]
```
In ES6:
```
const produce = [...fruits, ...vegetables];
```

### Rest Parameter (...)
```
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
// 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]
```
**Variadic functions** are functions that take an indefinite number of arguments.
```
function sum(...nums) {
    let total = 0;  
    for(const num of nums) {
        total += num;
    }
    return total;
}
```