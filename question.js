export const question = [
    {
    question: 'Double the elements of an array',
    data: [1, 2, 3, 4],
    expected_result: [2, 4, 6, 8],
    solution: 'data.map(x => x * 2)',
    category: 'map'
},
{
    question: "Double all numbers in an array",
    data: [5, 10, 15],
    expected_result: [10, 20, 30],
    solution: "data.map(x => x * 2)",
    category: 'map'
},
{
    question: 'Add 5 to each element in the array',
    data: [1, 2, 3, 4],
    expected_result: [6, 7, 8, 9],
    solution: 'data.map(x => x + 5)',
    category: 'map'
},
{
    question: 'Convert all strings in the array to uppercase',
    data: ['apple', 'banana', 'cherry'],
    expected_result: ['APPLE', 'BANANA', 'CHERRY'],
    solution: 'data.map(x => x.toUpperCase())',
    category: 'map'
},
{
    question: 'Square all numbers in the array',
    data: [2, 4, 6],
    expected_result: [4, 16, 36],
    solution: 'data.map(x => x ** 2)',
    category: 'map'
},
{
    question: 'Extract the length of each string in the array',
    data: ['hello', 'world', 'JavaScript'],
    expected_result: [5, 5, 10],
    solution: 'data.map(x => x.length)',
    category: 'map'
},
{
    question: 'Convert an array of numbers to their string representation',
    data: [1, 2, 3, 4],
    expected_result: ['1', '2', '3', '4'],
    solution: 'data.map(String)',
    category: 'map'
},
{
    question: 'Get the first letter of each string in the array',
    data: ['dog', 'cat', 'bird'],
    expected_result: ['d', 'c', 'b'],
    solution: 'data.map(x => x[0])',
    category: 'map'
},
{
    question: 'Convert all numbers to their negative equivalents',
    data: [1, 2, 3, 4],
    expected_result: [-1, -2, -3, -4],
    solution: 'data.map(x => -x)',
    category: 'map'
},
{
    question: 'Double all even numbers in the array',
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 4, 3, 8, 5],
    solution: 'data.map(x => x % 2 === 0 ? x * 2 : x)',
    category: 'map'
},
{
    question: 'Get the length of the array',
    data: [1, 2, 3, 4],
    expected_result: [],
    solution: 'data.length',
    category: 'length'
},
{
    question: 'Get the length of the longest string in the array',
    data: ['apple', 'banana', 'pear', 'grape'],
    expected_result: [],
    solution: 'Math.max(...data.map(x => x.length))',
    category: 'length'
},
{
    question: 'How many elements are in the array?',
    data: ['dog', 'cat', 'bird'],
    expected_result: [],
    solution: 'data.length',
    category: 'length'
},
{
    question: 'What is the length of the array of arrays?',
    data: [[1, 2], [3, 4, 5], [6]],
    expected_result: [],
    solution: 'data.length',
    category: 'length'
},
{
    question: 'How many words are in the sentence split into an array?',
    data: 'The quick brown fox jumps over the lazy dog'.split(' '),
    expected_result: [],
    solution: 'data.length',
    category: 'length'
},
{
    question: 'Add a number to the end of the array',
    data: [1, 2, 3],
    expected_result: [1, 2, 3, 4],
    solution: 'data.push(4)',
    category: 'push'
},
{
    question: 'Add a string to the end of the array',
    data: ['apple', 'banana'],
    expected_result: ['apple', 'banana', 'orange'],
    solution: 'data.push("orange")',
    category: 'push'
},
{
    question: 'Add multiple elements to the array',
    data: [1, 2],
    expected_result: [1, 2, 3, 4, 5],
    solution: 'data.push(3, 4, 5)',
    category: 'push'
},
{
    question: 'Add an array element to an empty array',
    data: [],
    expected_result: [10],
    solution: 'data.push(10)',
    category: 'push'
},
{
    question: 'Add a boolean value to the end of the array',
    data: [true, false],
    expected_result: [true, false, true],
    solution: 'data.push(true)',
    category: 'push'
},
{
    question: 'Remove the first element from the array',
    data: [1, 2, 3],
    expected_result: [2, 3],
    solution: 'data.shift()',
    category: 'shift'
},
{
    question: 'Remove the first string from an array of strings',
    data: ['apple', 'banana', 'cherry'],
    expected_result: ['banana', 'cherry'],
    solution: 'data.shift()',
    category: 'shift'
},
{
    question: 'Remove the first element from an array of numbers',
    data: [10, 20, 30],
    expected_result: [20, 30],
    solution: 'data.shift()',
    category: 'shift'
},
{
    question: 'Remove the first element from an array of boolean values',
    data: [true, false, true],
    expected_result: [false, true],
    solution: 'data.shift()',
    category: 'shift'
},
{
    question: 'Remove the last element from the array',
    data: [1, 2, 3],
    expected_result: [1, 2],
    solution: 'data.pop()',
    category: 'pop'
},
{
    question: 'Remove the last element from an array of strings',
    data: ['apple', 'banana', 'cherry'],
    expected_result: ['apple', 'banana'],
    solution: 'data.pop()',
    category: 'pop'
},
{
    question: 'Remove the last element from an array and return it',
    data: [5, 6, 7, 8],
    expected_result: [5, 6, 7],
    solution: 'data.pop()',
    category: 'pop'
},
{
    question: 'Remove the last element from an array with a single item',
    data: ['lastElement'],
    expected_result: [],
    solution: 'data.pop()',
    category: 'pop'
},
{
    question: 'Remove the last number from an array of numbers',
    data: [1, 2, 3, 4],
    expected_result: [1, 2, 3],
    solution: 'data.pop()',
    category: 'pop'
},
{
    question: 'Add a number to the beginning of the array',
    data: [2, 3, 4],
    expected_result: [1, 2, 3, 4],
    solution: 'data.unshift(1)',
    category: 'unshift'
},
{
    question: 'Add a string to the beginning of the array',
    data: ['apple', 'banana'],
    expected_result: ['orange', 'apple', 'banana'],
    solution: 'data.unshift("orange")',
    category: 'unshift'
},
{
    question: 'Add multiple elements to the beginning of the array',
    data: [3, 4],
    expected_result: [1, 2, 3, 4],
    solution: 'data.unshift(1, 2)',
    category: 'unshift'
},
{
    question: 'Add an array element to the beginning of an empty array',
    data: [],
    expected_result: [10],
    solution: 'data.unshift(10)',
    category: 'unshift'
},
{
    question: 'Add a boolean value to the beginning of the array',
    data: [false, true],
    expected_result: [true, false, true],
    solution: 'data.unshift(true)',
    category: 'unshift'
},
{
    question: 'Get the first element from the array using the `at` method',
    data: [1, 2, 3, 4],
    expected_result: [1],
    solution: 'data.at(0)',
    category: 'at'
},
{
    question: 'Get the last element from the array using the `at` method',
    data: ['apple', 'banana', 'cherry'],
    expected_result: ['cherry'],
    solution: 'data.at(-1)',
    category: 'at'
},
{
    question: 'Get the second element from the array using the `at` method',
    data: [10, 20, 30, 40],
    expected_result: [20],
    solution: 'data.at(1)',
    category: 'at'
},
{
    question: 'Get the third-to-last element from the array using the `at` method',
    data: [5, 10, 15, 20, 25],
    expected_result: [15],
    solution: 'data.at(-3)',
    category: 'at'
},
{
    question: 'Find the index of the element 3 in the array',
    data: [1, 2, 3, 4, 5],
    expected_result: [2],
    solution: 'data.indexOf(3)',
    category: 'indexOf'
},
{
    question: 'Find the index of the element "banana" in the array',
    data: ['apple', 'banana', 'cherry'],
    expected_result: [1],
    solution: 'data.indexOf("banana")',
    category: 'indexOf'
},
{
    question: 'Find the index of the element 10 in the array (element not present)',
    data: [5, 15, 20, 25],
    expected_result: [-1],
    solution: 'data.indexOf(10)',
    category: 'indexOf'
},
{
    question: 'Find the index of the element "orange" in the array (element not present)',
    data: ['apple', 'banana', 'cherry'],
    expected_result: [-1],
    solution: 'data.indexOf("orange")',
    category: 'indexOf'
},
{
    question: 'Find the index of the first occurrence of 4 in the array',
    data: [1, 2, 3, 4, 4, 5],
    expected_result: [3],
    solution: 'data.indexOf(4)',
    category: 'indexOf'
},
{
    question: 'Check if the array contains the number 3',
    data: [1, 2, 3, 4, 5],
    expected_result: [true],
    solution: 'data.includes(3)',
    category: 'includes'
},
{
    question: 'Check if the array contains the number 6',
    data: [1, 2, 3, 4, 5],
    expected_result: [false],
    solution: 'data.includes(6)',
    category: 'includes'
},
{
    question: 'Check if the array contains the string "banana"',
    data: ["apple", "banana", "cherry"],
    expected_result: [true],
    solution: 'data.includes("banana")',
    category: 'includes'
},
{
    question: 'Check if the array contains the string "orange"',
    data: ["apple", "banana", "cherry"],
    expected_result: [false],
    solution: 'data.includes("orange")',
    category: 'includes'
},
{
    question: 'Check if the array contains the number 4',
    data: [10, 20, 30, 40, 50],
    expected_result: [true],
    solution: 'data.includes(4)',
    category: 'includes'
},
{
    question: 'Check if the array contains the number 100',
    data: [10, 20, 30, 40, 50],
    expected_result: [false],
    solution: 'data.includes(100)',
    category: 'includes'
},
{
    question: 'Check if the array contains the boolean value true',
    data: [true, false, false],
    expected_result: [true],
    solution: 'data.includes(true)',
    category: 'includes'
},
{
    question: 'Check if the array contains the boolean value false',
    data: [true, false, false],
    expected_result: [true],
    solution: 'data.includes(false)',
    category: 'includes'
},
{
    question: 'Check if the array contains the number 0',
    data: [0, 1, 2, 3, 4],
    expected_result: [true],
    solution: 'data.includes(0)',
    category: 'includes'
},
{
    question: 'Check if the array contains the string "hello"',
    data: ["hi", "hello", "world"],
    expected_result: [true],
    solution: 'data.includes("hello")',
    category: 'includes'
},
{
    question: 'Filter all even numbers from the array',
    data: [1, 2, 3, 4, 5],
    expected_result: [2, 4],
    solution: 'data.filter(x => x % 2 === 0)',
    category: 'filter'
},
{
    question: 'Filter all numbers greater than 3 from the array',
    data: [1, 2, 3, 4, 5],
    expected_result: [4, 5],
    solution: 'data.filter(x => x > 3)',
    category: 'filter'
},
{
    question: 'Filter all strings that start with the letter "a"',
    data: ["apple", "banana", "avocado", "cherry"],
    expected_result: ["apple", "avocado"],
    solution: 'data.filter(x => x.startsWith("a"))',
    category: 'filter'
},
{
    question: 'Filter all strings with length greater than 5',
    data: ["apple", "banana", "avocado", "cherry"],
    expected_result: ["banana", "avocado"],
    solution: 'data.filter(x => x.length > 5)',
    category: 'filter'
},
{
    question: 'Filter out all elements that are not numbers',
    data: [1, "apple", 3, "banana", 5],
    expected_result: [1, 3, 5],
    solution: 'data.filter(x => typeof x === "number")',
    category: 'filter'
},
{
    question: 'Filter all numbers less than or equal to 2',
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2],
    solution: 'data.filter(x => x <= 2)',
    category: 'filter'
},
{
    question: 'Filter out all odd numbers from the array',
    data: [1, 2, 3, 4, 5],
    expected_result: [2, 4],
    solution: 'data.filter(x => x % 2 === 0)',
    category: 'filter'
},
{
    question: 'Filter strings that contain the letter "e"',
    data: ["apple", "banana", "cherry", "date"],
    expected_result: ["apple", "cherry", "date"],
    solution: 'data.filter(x => x.includes("e"))',
    category: 'filter'
},
{
    question: 'Filter out all negative numbers',
    data: [-1, 2, -3, 4, -5],
    expected_result: [2, 4],
    solution: 'data.filter(x => x >= 0)',
    category: 'filter'
},
{
    question: 'Filter all numbers that are divisible by 3',
    data: [1, 2, 3, 4, 5, 6],
    expected_result: [3, 6],
    solution: 'data.filter(x => x % 3 === 0)',
    category: 'filter'
},
{
    question: 'Filter out all empty strings from the array',
    data: ["apple", "", "banana", "", "cherry"],
    expected_result: ["apple", "banana", "cherry"],
    solution: 'data.filter(x => x !== "")',
    category: 'filter'
},
{
    question: 'Filter out all numbers that are even',
    data: [1, 2, 3, 4, 5, 6],
    expected_result: [1, 3, 5],
    solution: 'data.filter(x => x % 2 !== 0)',
    category: 'filter'
},
{
    question: 'Filter all strings that are longer than 4 characters',
    data: ["cat", "dog", "elephant", "bat", "lion"],
    expected_result: ["elephant"],
    solution: 'data.filter(x => x.length > 4)',
    category: 'filter'
},
{
    question: 'Filter out all falsy values from the array',
    data: [0, 1, false, true, "", "hello", NaN],
    expected_result: [1, true, "hello"],
    solution: 'data.filter(Boolean)',
    category: 'filter'
},
{
    question: 'Filter out all numbers that are not divisible by 2 or 3',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    expected_result: [2, 3, 6],
    solution: 'data.filter(x => x % 2 === 0 || x % 3 === 0)',
    category: 'filter'
},
{
    question: 'Filter out all elements containing the letter "b"',
    data: ["apple", "banana", "cherry", "blueberry", "grape"],
    expected_result: ["apple", "cherry", "grape"],
    solution: 'data.filter(x => !x.includes("b"))',
    category: 'filter'
},
{
    question: 'Filter all numbers greater than or equal to 10',
    data: [5, 12, 7, 20, 8],
    expected_result: [12, 20],
    solution: 'data.filter(x => x >= 10)',
    category: 'filter'
},
{
    question: 'Filter all strings that do not contain the letter "a"',
    data: ["apple", "banana", "cherry", "grape"],
    expected_result: ["cherry", "grape"],
    solution: 'data.filter(x => !x.includes("a"))',
    category: 'filter'
},
{
    question: 'Filter out all objects with a missing "name" property',
    data: [{name: "John"}, {age: 30}, {name: "Jane"}, {city: "Berlin"}],
    expected_result: [{name: "John"}, {name: "Jane"}],
    solution: 'data.filter(x => x.name)',
    category: 'filter'
},
{
    question: 'Filter out all undefined values',
    data: [1, undefined, 2, undefined, 3],
    expected_result: [1, 2, 3],
    solution: 'data.filter(x => x !== undefined)',
    category: 'filter'
},
{
    question: 'Filter all strings that start with the letter "a"',
    data: ["apple", "banana", "apricot", "cherry", "avocado"],
    expected_result: ["apple", "apricot", "avocado"],
    solution: 'data.filter(x => x.startsWith("a"))',
    category: 'filter'
},
{
    question: 'Filter out all objects that have a property "age" less than 18',
    data: [{name: "John", age: 22}, {name: "Jane", age: 16}, {name: "Mike", age: 30}],
    expected_result: [{name: "Jane", age: 16}],
    solution: 'data.filter(x => x.age <= 18)',
    category: 'filter'
},
{
    question: 'Filter out all elements that are not numbers',
    data: [1, "apple", 3, "banana", 5, "cherry"],
    expected_result: [1, 3, 5],
    solution: 'data.filter(x => typeof x === "number")',
    category: 'filter'
},
{
    question: 'Filter out all objects with a property "status" equal to "inactive"',
    data: [{name: "John", status: "active"}, {name: "Jane", status: "inactive"}, {name: "Mike", status: "active"}],
    expected_result: [{name: "John", status: "active"}, {name: "Mike", status: "active"}],
    solution: 'data.filter(x => x.status !== "inactive")',
    category: 'filter'
},
{
    question: 'Filter all numbers greater than or equal to the average of the array',
    data: [2, 4, 6, 8, 10],
    expected_result: [6, 8, 10],
    solution: 'data.filter(x => x >= (data.reduce((a, b) => a + b) / data.length))',
    category: 'filter'
},
{
    question: 'Check if all numbers in the array are positive',
    data: [1, 2, 3, 4, 5],
    expected_result: true,
    solution: 'data.every(x => x > 0)',
    category: 'every'
},
{
    question: 'Check if all strings in the array have a length greater than 3',
    data: ["apple", "banana", "cherry", "date"],
    expected_result: true,
    solution: 'data.every(x => x.length > 3)',
    category: 'every'
},
{
    question: 'Check if all numbers are divisible by 2',
    data: [2, 4, 6, 8],
    expected_result: true,
    solution: 'data.every(x => x % 2 === 0)',
    category: 'every'
},
{
    question: 'Check if all numbers in the array are greater than 10',
    data: [12, 15, 20],
    expected_result: true,
    solution: 'data.every(x => x > 10)',
    category: 'every'
},
{
    question: 'Check if all elements in the array are strings',
    data: ["apple", "banana", "cherry"],
    expected_result: true,
    solution: 'data.every(x => typeof x === "string")',
    category: 'every'
},
{
    question: 'Check if all numbers are odd',
    data: [1, 3, 5, 7],
    expected_result: true,
    solution: 'data.every(x => x % 2 !== 0)',
    category: 'every'
},
{
    question: 'Check if all elements are less than 100',
    data: [99, 50, 30, 70],
    expected_result: true,
    solution: 'data.every(x => x < 100)',
    category: 'every'
},
{
    question: 'Check if all objects have the property "status" with the value "active"',
    data: [{name: "John", status: "active"}, {name: "Jane", status: "active"}, {name: "Mike", status: "active"}],
    expected_result: true,
    solution: 'data.every(x => x.status === "active")',
    category: 'every'
},
{
    question: 'Check if all numbers are between 1 and 10',
    data: [2, 3, 5, 8],
    expected_result: true,
    solution: 'data.every(x => x >= 1 && x <= 10)',
    category: 'every'
},
{
    question: 'Check if all elements in the array are even numbers',
    data: [2, 4, 6, 8],
    expected_result: true,
    solution: 'data.every(x => x % 2 === 0)',
    category: 'every'
},
{
    question: 'Check if there are any positive numbers in the array',
    data: [-1, -2, 3, -4, -5],
    expected_result: true,
    solution: 'data.some(x => x > 0)',
    category: 'some'
},
{
    question: 'Check if any string in the array has a length greater than 6',
    data: ["apple", "banana", "cherry", "date"],
    expected_result: true,
    solution: 'data.some(x => x.length > 6)',
    category: 'some'
},
{
    question: 'Check if any number in the array is divisible by 3',
    data: [2, 4, 5, 6, 8],
    expected_result: true,
    solution: 'data.some(x => x % 3 === 0)',
    category: 'some'
},
{
    question: 'Check if any string in the array contains the letter "a"',
    data: ["apple", "banana", "cherry", "kiwi"],
    expected_result: true,
    solution: 'data.some(x => x.includes("a"))',
    category: 'some'
},
{
    question: 'Check if any number in the array is less than 0',
    data: [1, 2, 3, -4, 5],
    expected_result: true,
    solution: 'data.some(x => x < 0)',
    category: 'some'
},
{
    question: 'Check if any number in the array is an odd number',
    data: [2, 4, 6, 7, 8],
    expected_result: true,
    solution: 'data.some(x => x % 2 !== 0)',
    category: 'some'
},
{
    question: 'Check if any element in the array is a string',
    data: [1, 2, "hello", 4],
    expected_result: true,
    solution: 'data.some(x => typeof x === "string")',
    category: 'some'
},
{
    question: 'Check if any object in the array has the property "status" equal to "inactive"',
    data: [{name: "John", status: "active"}, {name: "Jane", status: "inactive"}, {name: "Mike", status: "active"}],
    expected_result: true,
    solution: 'data.some(x => x.status === "inactive")',
    category: 'some'
},
{
    question: 'Check if any element in the array is greater than 100',
    data: [50, 75, 200, 10],
    expected_result: true,
    solution: 'data.some(x => x > 100)',
    category: 'some'
},
{
    question: 'Check if any number in the array is equal to 0',
    data: [1, 2, 3, 0, 5],
    expected_result: true,
    solution: 'data.some(x => x === 0)',
    category: 'some'
},









]