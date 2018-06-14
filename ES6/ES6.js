// Let & Const
let string = 'hello';
console.log(string);

// Template Literals
let student = {
    'name': 'Anthony'
};
let teacher = {
    'name': 'Tom',
    'room': '625'
};
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
console.log(message);

// Destructuring Array
let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Tom'];
let [first, second, third] = positions;
console.log(first, third);

// Destructuring Object
const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};
const {type, color, carat} = gemstone;
console.log(type, color, carat);

// Object literal shorthand
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
console.log(gemstone2);

// Iteration
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
    if (digit % 2 === 0) {
        continue;
    }
    console.log(digit);
}

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
for (day of days) {
    console.log(day.charAt(0).toUpperCase() + day.slice(1));
}

// Spread Operator
const books = ['Don Quixote', 'The Hobbit', 'Alice in Wonderland', 'Tale of Two Cities'];
console.log(...books);

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

const fruits = ['apples', 'bananas', 'pears'];
const vegetables = ['corn', 'potatoes', 'carrots'];
const produce = [...fruits, ...vegetables];
console.log(produce);

const order = [20.17, 18.67, 1.50, 'cheese', 'eggs', 'milk', 'bread'];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

function average(...nums) {
    if (nums.length === 0) {
        return 0;
    };

    let sum = 0;
    for (num of nums) {
        sum += num;
    }
    return sum/nums.length;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

