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
}


]