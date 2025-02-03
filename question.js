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


]