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
{
    question: 'Fill the array with the number 5',
    data: [1, 2, 3, 4],
    expected_result: [5, 5, 5, 5],
    solution: 'data.fill(5)',
    category: 'fill'
},
{
    question: 'Fill the first 3 elements of the array with the value "x"',
    data: [1, 2, 3, 4, 5],
    expected_result: ['x', 'x', 'x', 4, 5],
    solution: 'data.fill("x", 0, 3)',
    category: 'fill'
},
{
    question: 'Fill the entire array with the value true',
    data: [false, false, false],
    expected_result: [true, true, true],
    solution: 'data.fill(true)',
    category: 'fill'
},
{
    question: 'Fill the array starting from index 2 with the number 0',
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2, 0, 0, 0],
    solution: 'data.fill(0, 2)',
    category: 'fill'
},
{
    question: 'Fill the array from index 1 to index 3 with the string "filled"',
    data: ['apple', 'banana', 'cherry', 'date'],
    expected_result: ['apple', 'filled', 'filled', 'date'],
    solution: 'data.fill("filled", 1, 3)',
    category: 'fill'
},
{
    question: 'Fill all the elements of the array with "N/A"',
    data: [null, null, null],
    expected_result: ['N/A', 'N/A', 'N/A'],
    solution: 'data.fill("N/A")',
    category: 'fill'
},
{
    question: 'Fill the array with the value 0 for the first 4 elements',
    data: [10, 20, 30, 40, 50],
    expected_result: [0, 0, 0, 0, 50],
    solution: 'data.fill(0, 0, 4)',
    category: 'fill'
},
{
    question: 'Fill the entire array with the number 100',
    data: [1, 2, 3, 4, 5, 6],
    expected_result: [100, 100, 100, 100, 100, 100],
    solution: 'data.fill(100)',
    category: 'fill'
},
{
    question: 'Fill the array from index 2 to the end with the string "empty"',
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2, 'empty', 'empty', 'empty'],
    solution: 'data.fill("empty", 2)',
    category: 'fill'
},
{
    question: 'Fill the first 2 elements of the array with 0',
    data: [7, 8, 9],
    expected_result: [0, 0, 9],
    solution: 'data.fill(0, 0, 2)',
    category: 'fill'
},

    {
        question: 'Sum all elements in the array',
        data: [1, 2, 3, 4, 5],
        expected_result: 15,
        solution: 'data.reduce((acc, curr) => acc + curr, 0)',
        category: 'reduce'
    },
    {
        question: 'Find the maximum value in the array',
        data: [7, 8, 2, 5, 3],
        expected_result: 8,
        solution: 'data.reduce((max, curr) => curr > max ? curr : max, data[0])',
        category: 'reduce'
    },
    {
        question: 'Find the minimum value in the array',
        data: [12, 45, 3, 8, 1],
        expected_result: 1,
        solution: 'data.reduce((min, curr) => curr < min ? curr : min, data[0])',
        category: 'reduce'
    },
    {
        question: 'Concatenate all elements in the array into a single string',
        data: ['apple', 'banana', 'cherry'],
        expected_result: 'applebananacherry',
        solution: 'data.reduce((acc, curr) => acc + curr, "")',
        category: 'reduce'
    },
    {
        question: 'Multiply all elements in the array together',
        data: [1, 2, 3, 4],
        expected_result: 24,
        solution: 'data.reduce((acc, curr) => acc * curr, 1)',
        category: 'reduce'
    },
    {
        question: 'Count the occurrences of the number 2 in the array',
        data: [1, 2, 2, 3, 2],
        expected_result: 3,
        solution: 'data.reduce((count, curr) => curr === 2 ? count + 1 : count, 0)',
        category: 'reduce'
    },
    {
        question: 'Flatten a nested array of arrays',
        data: [[1, 2], [3, 4], [5, 6]],
        expected_result: [1, 2, 3, 4, 5, 6],
        solution: 'data.reduce((acc, curr) => acc.concat(curr), [])',
        category: 'reduce'
    },
    {
        question: 'Create an object where the keys are the array indices and the values are the array elements',
        data: ['a', 'b', 'c'],
        expected_result: {0: 'a', 1: 'b', 2: 'c'},
        solution: 'data.reduce((acc, curr, index) => { acc[index] = curr; return acc; }, {})',
        category: 'reduce'
    },
    {
        question: 'Find the sum of even numbers in the array',
        data: [1, 2, 3, 4, 5, 6],
        expected_result: 12,
        solution: 'data.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0)',
        category: 'reduce'
    },
    {
        question: 'Create a string from the array where each element is separated by a hyphen',
        data: ['one', 'two', 'three'],
        expected_result: 'one-two-three',
        solution: 'data.reduce((acc, curr) => acc + "-" + curr)',
        category: 'reduce'
    },
    
        {
            question: 'Find the sum of all odd numbers in the array',
            data: [1, 2, 3, 4, 5, 6],
            expected_result: 9,
            solution: 'data.reduce((acc, curr) => curr % 2 !== 0 ? acc + curr : acc, 0)',
            category: 'reduce'
        },
        {
            question: 'Count how many times the number 10 appears in the array',
            data: [10, 20, 10, 30, 10],
            expected_result: 3,
            solution: 'data.reduce((count, curr) => curr === 10 ? count + 1 : count, 0)',
            category: 'reduce'
        },
        {
            question: 'Create a single object from an array of key-value pairs',
            data: [['a', 1], ['b', 2], ['c', 3]],
            expected_result: {a: 1, b: 2, c: 3},
            solution: 'data.reduce((acc, [key, value]) => { acc[key] = value; return acc; }, {})',
            category: 'reduce'
        },
        {
            question: 'Calculate the average of all numbers in the array',
            data: [10, 20, 30, 40],
            expected_result: 25,
            solution: 'data.reduce((acc, curr) => acc + curr, 0) / data.length',
            category: 'reduce'
        },
        {
            question: 'Concatenate all elements in the array with a space between them',
            data: ['Hello', 'world', 'how', 'are', 'you'],
            expected_result: 'Hello world how are you',
            solution: 'data.reduce((acc, curr) => acc + " " + curr)',
            category: 'reduce'
        },
        {
            question: 'Convert an array of strings to an array of their lengths',
            data: ['apple', 'banana', 'cherry'],
            expected_result: [5, 6, 6],
            solution: 'data.reduce((acc, curr) => { acc.push(curr.length); return acc; }, [])',
            category: 'reduce'
        },
        {
            question: 'Group the elements of the array into even and odd numbers',
            data: [1, 2, 3, 4, 5, 6],
            expected_result: {even: [2, 4, 6], odd: [1, 3, 5]},
            solution: 'data.reduce((acc, curr) => { curr % 2 === 0 ? acc.even.push(curr) : acc.odd.push(curr); return acc; }, {even: [], odd: []})',
            category: 'reduce'
        },
        {
            question: 'Find the product of all elements in the array',
            data: [2, 3, 4],
            expected_result: 24,
            solution: 'data.reduce((acc, curr) => acc * curr, 1)',
            category: 'reduce'
        },
        {
            question: 'Create a new array with elements doubled',
            data: [1, 2, 3],
            expected_result: [2, 4, 6],
            solution: 'data.reduce((acc, curr) => { acc.push(curr * 2); return acc; }, [])',
            category: 'reduce'
        },
        {
            question: 'Find the longest string in the array',
            data: ['apple', 'banana', 'cherry', 'grape'],
            expected_result: 'banana',
            solution: 'data.reduce((longest, curr) => curr.length > longest.length ? curr : longest, "")',
            category: 'reduce'
        },
            {
                question: 'Flatten a deeply nested array',
                data: [[1, 2, [3, 4]], [5, [6, 7]]],
                expected_result: [1, 2, 3, 4, 5, 6, 7],
                solution: 'data.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? curr.reduce((a, b) => a.concat(b), []) : curr), [])',
                category: 'reduce'
            },
            {
                question: 'Create a new array of objects where each object has the number as key and its square as value',
                data: [1, 2, 3, 4],
                expected_result: [{1: 1}, {2: 4}, {3: 9}, {4: 16}],
                solution: 'data.reduce((acc, curr) => { acc.push({[curr]: curr * curr}); return acc; }, [])',
                category: 'reduce'
            },
            {
                question: 'Find the difference between the maximum and minimum numbers in the array',
                data: [4, 7, 1, 9, 2],
                expected_result: 8,
                solution: 'data.reduce((acc, curr) => { acc.min = Math.min(acc.min, curr); acc.max = Math.max(acc.max, curr); return acc; }, {min: Infinity, max: -Infinity})',
                category: 'reduce'
            },
            {
                question: 'Create an array that only contains numbers greater than 5',
                data: [2, 3, 6, 8, 1],
                expected_result: [6, 8],
                solution: 'data.reduce((acc, curr) => curr > 5 ? [...acc, curr] : acc, [])',
                category: 'reduce'
            },
            {
                question: 'Find the total length of all strings in the array',
                data: ['apple', 'banana', 'cherry'],
                expected_result: 16,
                solution: 'data.reduce((acc, curr) => acc + curr.length, 0)',
                category: 'reduce'
            },
            {
                question: 'Combine all objects in the array into one object, merging their properties',
                data: [{a: 1}, {b: 2}, {c: 3}],
                expected_result: {a: 1, b: 2, c: 3},
                solution: 'data.reduce((acc, curr) => ({...acc, ...curr}), {})',
                category: 'reduce'
            },
            {
                question: 'Reverse the order of elements in the array',
                data: [1, 2, 3, 4],
                expected_result: [4, 3, 2, 1],
                solution: 'data.reduce((acc, curr) => [curr, ...acc], [])',
                category: 'reduce'
            },
            {
                question: 'Check if the array contains only even numbers',
                data: [2, 4, 6, 8],
                expected_result: true,
                solution: 'data.reduce((acc, curr) => acc && curr % 2 === 0, true)',
                category: 'reduce'
            },
            {
                question: 'Find the sum of all numbers in the array except the first one',
                data: [10, 20, 30, 40],
                expected_result: 90,
                solution: 'data.slice(1).reduce((acc, curr) => acc + curr, 0)',
                category: 'reduce'
            },
            {
                question: 'Create an array of only the unique values from the array',
                data: [1, 2, 2, 3, 3, 4],
                expected_result: [1, 2, 3, 4],
                solution: 'data.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])',
                category: 'reduce'
            },
            {
                    question: 'Merge two arrays into one array',
                    data: [[1, 2], [3, 4]],
                    expected_result: [1, 2, 3, 4],
                    solution: 'data[0].concat(data[1])',
                    category: 'concat'
                },
                {
                    question: 'Join two arrays with a string between them',
                    data: [['a', 'b'], ['c', 'd']],
                    expected_result: ['a', 'b', 'c', 'd'],
                    solution: 'data[0].concat(" ", data[1])',
                    category: 'concat'
                },
                {
                    question: 'Add an element to the beginning of an array using concat',
                    data: [[1, 2, 3], 0],
                    expected_result: [0, 1, 2, 3],
                    solution: 'data[1].concat(data[0])',
                    category: 'concat'
                },
                {
                    question: 'Concatenate three arrays into one array',
                    data: [[1, 2], [3, 4], [5, 6]],
                    expected_result: [1, 2, 3, 4, 5, 6],
                    solution: 'data[0].concat(data[1], data[2])',
                    category: 'concat'
                },
                {
                    question: 'Combine an array of strings with a single array of numbers',
                    data: [['apple', 'banana'], [1, 2, 3]],
                    expected_result: ['apple', 'banana', 1, 2, 3],
                    solution: 'data[0].concat(data[1])',
                    category: 'concat'
                },
                {
                    question: 'Concatenate an array of elements with an array of empty strings',
                    data: [['apple', 'banana'], ['', '', '']],
                    expected_result: ['apple', 'banana', '', '', ''],
                    solution: 'data[0].concat(data[1])',
                    category: 'concat'
                },
                {
                    question: 'Combine arrays of objects into a single array of objects',
                    data: [[{id: 1, name: 'John'}], [{id: 2, name: 'Jane'}]],
                    expected_result: [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}],
                    solution: 'data[0].concat(data[1])',
                    category: 'concat'
                },
                {
                    question: 'Add multiple elements to an array using concat',
                    data: [[1, 2, 3], 4, 5, 6],
                    expected_result: [1, 2, 3, 4, 5, 6],
                    solution: 'data[0].concat(4, 5, 6)',
                    category: 'concat'
                },
                {
                    question: 'Combine an array with another array containing null and undefined values',
                    data: [[1, 2, 3], [null, undefined]],
                    expected_result: [1, 2, 3, null, undefined],
                    solution: 'data[0].concat(data[1])',
                    category: 'concat'
                },
                {
                    question: 'Concatenate an array with an empty array',
                    data: [[1, 2, 3], []],
                    expected_result: [1, 2, 3],
                    solution: 'data[0].concat(data[1])',
                    category: 'concat'
                },
                
                    {
                        question: 'Concatenate two arrays of numbers and sort the result',
                        data: [[4, 3], [1, 2]],
                        expected_result: [1, 2, 3, 4],
                        solution: 'data[0].concat(data[1]).sort((a, b) => a - b)',
                        category: 'concat'
                    },
                    {
                        question: 'Merge multiple arrays of strings into one array with spaces between them',
                        data: [['apple', 'banana'], ['cherry', 'date'], ['elderberry']],
                        expected_result: ['apple', 'banana', 'cherry', 'date', 'elderberry'],
                        solution: 'data[0].concat(data[1], data[2])',
                        category: 'concat'
                    },
                    {
                        question: 'Add a string to the end of an array of numbers',
                        data: [[1, 2, 3], 'end'],
                        expected_result: [1, 2, 3, 'end'],
                        solution: 'data[0].concat(data[1])',
                        category: 'concat'
                    },
                    {
                        question: 'Combine arrays of different types: numbers, strings, and booleans',
                        data: [[1, 2], ['apple', 'banana'], [true, false]],
                        expected_result: [1, 2, 'apple', 'banana', true, false],
                        solution: 'data[0].concat(data[1], data[2])',
                        category: 'concat'
                    },
                    {
                        question: 'Merge an array of objects with another array of numbers',
                        data: [[{a: 1}, {b: 2}], [3, 4, 5]],
                        expected_result: [{a: 1}, {b: 2}, 3, 4, 5],
                        solution: 'data[0].concat(data[1])',
                        category: 'concat'
                    },
                    {
                        question: 'Combine a nested array with other arrays and flatten them',
                        data: [[1, 2], [3, 4], [5, 6]],
                        expected_result: [1, 2, 3, 4, 5, 6],
                        solution: 'data[0].concat(data[1], data[2])',
                        category: 'concat'
                    },
                    {
                        question: 'Merge an array of integers with an array of strings',
                        data: [[1, 2, 3], ['one', 'two', 'three']],
                        expected_result: [1, 2, 3, 'one', 'two', 'three'],
                        solution: 'data[0].concat(data[1])',
                        category: 'concat'
                    },
                    {
                        question: 'Concatenate two arrays and insert a number in between them',
                        data: [[10, 20], 30, [40, 50]],
                        expected_result: [10, 20, 30, 40, 50],
                        solution: 'data[0].concat(data[1], data[2])',
                        category: 'concat'
                    },
                    {
                        question: 'Add elements of different types (number, string, object) to an array',
                        data: [[1, 2], 'hello', {key: 'value'}],
                        expected_result: [1, 2, 'hello', {key: 'value'}],
                        solution: 'data[0].concat(data[1], data[2])',
                        category: 'concat'
                    },
                    {
                        question: 'Merge an array with a large number of elements with a small array',
                        data: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [10]],
                        expected_result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        solution: 'data[0].concat(data[1])',
                        category: 'concat'
                    },
                    
                        {
                            question: 'Reverse the order of elements in the array',
                            data: [1, 2, 3, 4, 5],
                            expected_result: [5, 4, 3, 2, 1],
                            solution: 'data.reverse()',
                            category: 'reverse'
                        },
                        {
                            question: 'Reverse an array of strings',
                            data: ['apple', 'banana', 'cherry'],
                            expected_result: ['cherry', 'banana', 'apple'],
                            solution: 'data.reverse()',
                            category: 'reverse'
                        },
                        {
                            question: 'Reverse an array of numbers and sum all elements',
                            data: [1, 2, 3, 4],
                            expected_result: 10,
                            solution: 'data.reverse().reduce((acc, curr) => acc + curr, 0)',
                            category: 'reverse'
                        },
                        {
                            question: 'Reverse an array of booleans',
                            data: [true, false, true, false],
                            expected_result: [false, true, false, true],
                            solution: 'data.reverse()',
                            category: 'reverse'
                        },
                        {
                            question: 'Reverse an array of mixed types: numbers, strings, and booleans',
                            data: [1, 'hello', true, 2, 'world', false],
                            expected_result: [false, 'world', 2, true, 'hello', 1],
                            solution: 'data.reverse()',
                            category: 'reverse'
                        },
                        {
                            question: 'Reverse an array and return only the last 3 elements',
                            data: [10, 20, 30, 40, 50],
                            expected_result: [50, 40, 30],
                            solution: 'data.reverse().slice(0, 3)',
                            category: 'reverse'
                        },
                        {
                            question: 'Reverse the order of an array of objects',
                            data: [{a: 1}, {b: 2}, {c: 3}],
                            expected_result: [{c: 3}, {b: 2}, {a: 1}],
                            solution: 'data.reverse()',
                            category: 'reverse'
                        },
                        {
                            question: 'Reverse an array of numbers and return a new array without modifying the original',
                            data: [1, 2, 3, 4],
                            expected_result: [4, 3, 2, 1],
                            solution: '[...data].reverse()',
                            category: 'reverse'
                        },
                        {
                            question: 'Reverse the order of characters in each string in the array',
                            data: ['apple', 'banana', 'cherry'],
                            expected_result: ['elppa', 'ananab', 'yrrehc'],
                            solution: 'data.map(str => str.split("").reverse().join(""))',
                            category: 'reverse'
                        },
                        {
                            question: 'Reverse an array of arrays',
                            data: [[1, 2], [3, 4], [5, 6]],
                            expected_result: [[5, 6], [3, 4], [1, 2]],
                            solution: 'data.reverse()',
                            category: 'reverse'
                        },
                        
                            {
                                question: 'Sort an array of numbers in ascending order',
                                data: [4, 2, 5, 1, 3],
                                expected_result: [1, 2, 3, 4, 5],
                                solution: 'data.sort((a, b) => a - b)',
                                category: 'sort'
                            },
                            {
                                question: 'Sort an array of strings alphabetically',
                                data: ['banana', 'apple', 'cherry'],
                                expected_result: ['apple', 'banana', 'cherry'],
                                solution: 'data.sort()',
                                category: 'sort'
                            },
                            {
                                question: 'Sort an array of numbers in descending order',
                                data: [3, 1, 4, 2],
                                expected_result: [4, 3, 2, 1],
                                solution: 'data.sort((a, b) => b - a)',
                                category: 'sort'
                            },
                            {
                                question: 'Sort an array of mixed numbers and strings',
                                data: [10, 'apple', 5, 'banana', 2],
                                expected_result: ['apple', 'banana', 2, 5, 10],
                                solution: 'data.sort((a, b) => (typeof a === "string" ? a : "") > (typeof b === "string" ? b : "") ? 1 : -1)',
                                category: 'sort'
                            },
                            {
                                question: 'Sort an array of objects by a specific property (age)',
                                data: [{name: 'John', age: 30}, {name: 'Jane', age: 25}, {name: 'Doe', age: 35}],
                                expected_result: [{name: 'Jane', age: 25}, {name: 'John', age: 30}, {name: 'Doe', age: 35}],
                                solution: 'data.sort((a, b) => a.age - b.age)',
                                category: 'sort'
                            },
                            {
                                question: 'Sort an array of strings by length',
                                data: ['apple', 'banana', 'kiwi', 'grape'],
                                expected_result: ['kiwi', 'grape', 'apple', 'banana'],
                                solution: 'data.sort((a, b) => a.length - b.length)',
                                category: 'sort'
                            },
                            {
                                question: 'Sort an array of numbers and strings, putting strings first',
                                data: [5, 'apple', 2, 'banana', 4],
                                expected_result: ['apple', 'banana', 2, 4, 5],
                                solution: 'data.sort((a, b) => (typeof a === "string" ? -1 : 1))',
                                category: 'sort'
                            },
                            {
                                question: 'Sort an array of dates in descending order',
                                data: ['2025-02-06', '2020-05-10', '2021-01-01'],
                                expected_result: ['2025-02-06', '2021-01-01', '2020-05-10'],
                                solution: 'data.sort((a, b) => new Date(b) - new Date(a))',
                                category: 'sort'
                            },
                            {
                                question: 'Sort an array of numbers in ascending order, treating them as strings',
                                data: [10, 2, 1, 21],
                                expected_result: [1, 10, 2, 21],
                                solution: 'data.sort()',
                                category: 'sort'
                            },
                            {
                                question: 'Sort an array of objects by multiple properties (age, then name)',
                                data: [{name: 'John', age: 30}, {name: 'Jane', age: 25}, {name: 'Doe', age: 25}],
                                expected_result: [{name: 'Doe', age: 25}, {name: 'Jane', age: 25}, {name: 'John', age: 30}],
                                solution: 'data.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name))',
                                category: 'sort'
                            },
                            
                                {
                                    question: 'Sort an array of numbers in ascending order, ignoring negative signs',
                                    data: [-10, 5, -2, 7],
                                    expected_result: [-10, -2, 5, 7],
                                    solution: 'data.sort((a, b) => Math.abs(a) - Math.abs(b))',
                                    category: 'sort'
                                },
                                {
                                    question: 'Sort an array of numbers by their absolute values in descending order',
                                    data: [10, -5, 2, -8],
                                    expected_result: [10, -8, -5, 2],
                                    solution: 'data.sort((a, b) => Math.abs(b) - Math.abs(a))',
                                    category: 'sort'
                                },
                                {
                                    question: 'Sort an array of strings in reverse alphabetical order',
                                    data: ['apple', 'banana', 'cherry'],
                                    expected_result: ['cherry', 'banana', 'apple'],
                                    solution: 'data.sort().reverse()',
                                    category: 'sort'
                                },
                                {
                                    question: 'Sort an array of boolean values (true first)',
                                    data: [false, true, true, false],
                                    expected_result: [true, true, false, false],
                                    solution: 'data.sort((a, b) => b - a)',
                                    category: 'sort'
                                },
                                {
                                    question: 'Sort an array of objects by a numerical property (price)',
                                    data: [{product: 'apple', price: 10}, {product: 'banana', price: 5}, {product: 'cherry', price: 15}],
                                    expected_result: [{product: 'banana', price: 5}, {product: 'apple', price: 10}, {product: 'cherry', price: 15}],
                                    solution: 'data.sort((a, b) => a.price - b.price)',
                                    category: 'sort'
                                },
                                {
                                    question: 'Sort an array of strings based on the frequency of each character (most frequent first)',
                                    data: ['apple', 'banana', 'kiwi'],
                                    expected_result: ['banana', 'apple', 'kiwi'],
                                    solution: 'data.sort((a, b) => b.split("a").length - a.split("a").length)',
                                    category: 'sort'
                                },
                                {
                                    question: 'Sort an array of arrays based on the length of each inner array (shortest first)',
                                    data: [[1, 2], [1, 2, 3], [1]],
                                    expected_result: [[1], [1, 2], [1, 2, 3]],
                                    solution: 'data.sort((a, b) => a.length - b.length)',
                                    category: 'sort'
                                },
                                {
                                    question: 'Sort an array of objects by a string property (name) in reverse order',
                                    data: [{name: 'John'}, {name: 'Jane'}, {name: 'Doe'}],
                                    expected_result: [{name: 'John'}, {name: 'Jane'}, {name: 'Doe'}],
                                    solution: 'data.sort((a, b) => b.name.localeCompare(a.name))',
                                    category: 'sort'
                                },
                                {
                                    question: 'Sort an array of numbers by the sum of their digits (lowest sum first)',
                                    data: [23, 41, 12, 34],
                                    expected_result: [12, 23, 34, 41],
                                    solution: 'data.sort((a, b) => sumOfDigits(a) - sumOfDigits(b))',
                                    category: 'sort',
                                    custom_function: 'function sumOfDigits(num) { return num.toString().split("").reduce((acc, val) => acc + Number(val), 0); }'
                                },
                                {
                                    question: 'Sort an array of dates in ascending order of year',
                                    data: ['2025-02-06', '2020-05-10', '2021-01-01'],
                                    expected_result: ['2020-05-10', '2021-01-01', '2025-02-06'],
                                    solution: 'data.sort((a, b) => new Date(a).getFullYear() - new Date(b).getFullYear())',
                                    category: 'sort'
                                },
                                
                                    {
                                        question: 'Join the elements of an array of numbers into a string with commas',
                                        data: [1, 2, 3, 4],
                                        expected_result: '1,2,3,4',
                                        solution: 'data.join()',
                                        category: 'join'
                                    },
                                    {
                                        question: 'Join an array of strings into a single string with a space between them',
                                        data: ['apple', 'banana', 'cherry'],
                                        expected_result: 'apple banana cherry',
                                        solution: 'data.join(" ")',
                                        category: 'join'
                                    },
                                    {
                                        question: 'Join an array of strings into a single string with a hyphen between each element',
                                        data: ['one', 'two', 'three'],
                                        expected_result: 'one-two-three',
                                        solution: 'data.join("-")',
                                        category: 'join'
                                    },
                                    {
                                        question: 'Join an array of numbers into a string with semicolons between the numbers',
                                        data: [10, 20, 30],
                                        expected_result: '10;20;30',
                                        solution: 'data.join(";")',
                                        category: 'join'
                                    },
                                    {
                                        question: 'Join an array of strings and add a period at the end',
                                        data: ['The', 'quick', 'brown', 'fox'],
                                        expected_result: 'The quick brown fox.',
                                        solution: 'data.join(" ") + "."',
                                        category: 'join'
                                    },
                                    {
                                        question: 'Join an array of words into a string with no spaces or commas',
                                        data: ['Hello', 'World'],
                                        expected_result: 'HelloWorld',
                                        solution: 'data.join("")',
                                        category: 'join'
                                    },
                                    {
                                        question: 'Join an array of characters into a string and separate them with a comma',
                                        data: ['a', 'b', 'c', 'd'],
                                        expected_result: 'a,b,c,d',
                                        solution: 'data.join(",")',
                                        category: 'join'
                                    },
                                    {
                                        question: 'Join an array of strings and reverse the order of elements',
                                        data: ['apple', 'banana', 'cherry'],
                                        expected_result: 'cherry banana apple',
                                        solution: 'data.reverse().join(" ")',
                                        category: 'join'
                                    },
                                    {
                                        question: 'Join an array of numbers and place a space after each comma',
                                        data: [5, 10, 15, 20],
                                        expected_result: '5, 10, 15, 20',
                                        solution: 'data.join(", ")',
                                        category: 'join'
                                    },
                                    {
                                        question: 'Join an array of booleans into a string with no separator',
                                        data: [true, false, true],
                                        expected_result: 'truefalsetrue',
                                        solution: 'data.join("")',
                                        category: 'join'
                                    },
                                
                                
                            
                            
                        
                        
                    
                    
                
                
            
            
        
        
    

]