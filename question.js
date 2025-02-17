export const question = [
  {
    question: "Double the elements of an array",
    data: [1, 2, 3, 4],
    expected_result: [2, 4, 6, 8],
    solution: "data.map(x => x * 2)",
    category: "map",
  },
  {
    question: "Double all numbers in an array",
    data: [5, 10, 15],
    expected_result: [10, 20, 30],
    solution: "data.map(x => x * 2)",
    category: "map",
  },
  {
    question: "Add 5 to each element in the array",
    data: [1, 2, 3, 4],
    expected_result: [6, 7, 8, 9],
    solution: "data.map(x => x + 5)",
    category: "map",
  },
  {
    question: "Convert all strings in the array to uppercase",
    data: ["apple", "banana", "cherry"],
    expected_result: ["APPLE", "BANANA", "CHERRY"],
    solution: "data.map(x => x.toUpperCase())",
    category: "map",
  },
  {
    question: "Square all numbers in the array",
    data: [2, 4, 6],
    expected_result: [4, 16, 36],
    solution: "data.map(x => x ** 2)",
    category: "map",
  },
  {
    question: "Extract the length of each string in the array",
    data: ["hello", "world", "JavaScript"],
    expected_result: [5, 5, 10],
    solution: "data.map(x => x.length)",
    category: "map",
  },
  {
    question: "Convert an array of numbers to their string representation",
    data: [1, 2, 3, 4],
    expected_result: ["1", "2", "3", "4"],
    solution: "data.map(String)",
    category: "map",
  },
  {
    question: "Get the first letter of each string in the array",
    data: ["dog", "cat", "bird"],
    expected_result: ["d", "c", "b"],
    solution: "data.map(x => x[0])",
    category: "map",
  },
  {
    question: "Convert all numbers to their negative equivalents",
    data: [1, 2, 3, 4],
    expected_result: [-1, -2, -3, -4],
    solution: "data.map(x => -x)",
    category: "map",
  },
  {
    question: "Double all even numbers in the array",
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 4, 3, 8, 5],
    solution: "data.map(x => x % 2 === 0 ? x * 2 : x)",
    category: "map",
  },
  {
    question: "Get the length of the array",
    data: [1, 2, 3, 4],
    expected_result: [],
    solution: "data.length",
    category: "length",
  },
  {
    question: "Get the length of the longest string in the array",
    data: ["apple", "banana", "pear", "grape"],
    expected_result: [],
    solution: "Math.max(...data.map(x => x.length))",
    category: "length",
  },
  {
    question: "How many elements are in the array?",
    data: ["dog", "cat", "bird"],
    expected_result: [],
    solution: "data.length",
    category: "length",
  },
  {
    question: "What is the length of the array of arrays?",
    data: [[1, 2], [3, 4, 5], [6]],
    expected_result: [],
    solution: "data.length",
    category: "length",
  },
  {
    question: "How many words are in the sentence split into an array?",
    data: "The quick brown fox jumps over the lazy dog".split(" "),
    expected_result: [],
    solution: "data.length",
    category: "length",
  },
  {
    question: "Add a number to the end of the array",
    data: [1, 2, 3],
    expected_result: [1, 2, 3, 4],
    solution: "data.push(4)",
    category: "push",
  },
  {
    question: "Add a string to the end of the array",
    data: ["apple", "banana"],
    expected_result: ["apple", "banana", "orange"],
    solution: 'data.push("orange")',
    category: "push",
  },
  {
    question: "Add multiple elements to the array",
    data: [1, 2],
    expected_result: [1, 2, 3, 4, 5],
    solution: "data.push(3, 4, 5)",
    category: "push",
  },
  {
    question: "Add an array element to an empty array",
    data: [],
    expected_result: [10],
    solution: "data.push(10)",
    category: "push",
  },
  {
    question: "Add a boolean value to the end of the array",
    data: [true, false],
    expected_result: [true, false, true],
    solution: "data.push(true)",
    category: "push",
  },
  {
    question: "Remove the first element from the array",
    data: [1, 2, 3],
    expected_result: [2, 3],
    solution: "data.shift()",
    category: "shift",
  },
  {
    question: "Remove the first string from an array of strings",
    data: ["apple", "banana", "cherry"],
    expected_result: ["banana", "cherry"],
    solution: "data.shift()",
    category: "shift",
  },
  {
    question: "Remove the first element from an array of numbers",
    data: [10, 20, 30],
    expected_result: [20, 30],
    solution: "data.shift()",
    category: "shift",
  },
  {
    question: "Remove the first element from an array of boolean values",
    data: [true, false, true],
    expected_result: [false, true],
    solution: "data.shift()",
    category: "shift",
  },
  {
    question: "Remove the last element from the array",
    data: [1, 2, 3],
    expected_result: [1, 2],
    solution: "data.pop()",
    category: "pop",
  },
  {
    question: "Remove the last element from an array of strings",
    data: ["apple", "banana", "cherry"],
    expected_result: ["apple", "banana"],
    solution: "data.pop()",
    category: "pop",
  },
  {
    question: "Remove the last element from an array and return it",
    data: [5, 6, 7, 8],
    expected_result: [5, 6, 7],
    solution: "data.pop()",
    category: "pop",
  },
  {
    question: "Remove the last element from an array with a single item",
    data: ["lastElement"],
    expected_result: [],
    solution: "data.pop()",
    category: "pop",
  },
  {
    question: "Remove the last number from an array of numbers",
    data: [1, 2, 3, 4],
    expected_result: [1, 2, 3],
    solution: "data.pop()",
    category: "pop",
  },
  {
    question: "Add a number to the beginning of the array",
    data: [2, 3, 4],
    expected_result: [1, 2, 3, 4],
    solution: "data.unshift(1)",
    category: "unshift",
  },
  {
    question: "Add a string to the beginning of the array",
    data: ["apple", "banana"],
    expected_result: ["orange", "apple", "banana"],
    solution: 'data.unshift("orange")',
    category: "unshift",
  },
  {
    question: "Add multiple elements to the beginning of the array",
    data: [3, 4],
    expected_result: [1, 2, 3, 4],
    solution: "data.unshift(1, 2)",
    category: "unshift",
  },
  {
    question: "Add an array element to the beginning of an empty array",
    data: [],
    expected_result: [10],
    solution: "data.unshift(10)",
    category: "unshift",
  },
  {
    question: "Add a boolean value to the beginning of the array",
    data: [false, true],
    expected_result: [true, false, true],
    solution: "data.unshift(true)",
    category: "unshift",
  },
  {
    question: "Get the first element from the array using the `at` method",
    data: [1, 2, 3, 4],
    expected_result: [1],
    solution: "data.at(0)",
    category: "at",
  },
  {
    question: "Get the last element from the array using the `at` method",
    data: ["apple", "banana", "cherry"],
    expected_result: ["cherry"],
    solution: "data.at(-1)",
    category: "at",
  },
  {
    question: "Get the second element from the array using the `at` method",
    data: [10, 20, 30, 40],
    expected_result: [20],
    solution: "data.at(1)",
    category: "at",
  },
  {
    question:
      "Get the third-to-last element from the array using the `at` method",
    data: [5, 10, 15, 20, 25],
    expected_result: [15],
    solution: "data.at(-3)",
    category: "at",
  },
  {
    question: "Find the index of the element 3 in the array",
    data: [1, 2, 3, 4, 5],
    expected_result: [2],
    solution: "data.indexOf(3)",
    category: "indexOf",
  },
  {
    question: 'Find the index of the element "banana" in the array',
    data: ["apple", "banana", "cherry"],
    expected_result: [1],
    solution: 'data.indexOf("banana")',
    category: "indexOf",
  },
  {
    question:
      "Find the index of the element 10 in the array (element not present)",
    data: [5, 15, 20, 25],
    expected_result: [-1],
    solution: "data.indexOf(10)",
    category: "indexOf",
  },
  {
    question:
      'Find the index of the element "orange" in the array (element not present)',
    data: ["apple", "banana", "cherry"],
    expected_result: [-1],
    solution: 'data.indexOf("orange")',
    category: "indexOf",
  },
  {
    question: "Find the index of the first occurrence of 4 in the array",
    data: [1, 2, 3, 4, 4, 5],
    expected_result: [3],
    solution: "data.indexOf(4)",
    category: "indexOf",
  },
  {
    question: "Check if the array contains the number 3",
    data: [1, 2, 3, 4, 5],
    expected_result: [true],
    solution: "data.includes(3)",
    category: "includes",
  },
  {
    question: "Check if the array contains the number 6",
    data: [1, 2, 3, 4, 5],
    expected_result: [false],
    solution: "data.includes(6)",
    category: "includes",
  },
  {
    question: 'Check if the array contains the string "banana"',
    data: ["apple", "banana", "cherry"],
    expected_result: [true],
    solution: 'data.includes("banana")',
    category: "includes",
  },
  {
    question: 'Check if the array contains the string "orange"',
    data: ["apple", "banana", "cherry"],
    expected_result: [false],
    solution: 'data.includes("orange")',
    category: "includes",
  },
  {
    question: "Check if the array contains the number 4",
    data: [10, 20, 30, 40, 50],
    expected_result: [true],
    solution: "data.includes(4)",
    category: "includes",
  },
  {
    question: "Check if the array contains the number 100",
    data: [10, 20, 30, 40, 50],
    expected_result: [false],
    solution: "data.includes(100)",
    category: "includes",
  },
  {
    question: "Check if the array contains the boolean value true",
    data: [true, false, false],
    expected_result: [true],
    solution: "data.includes(true)",
    category: "includes",
  },
  {
    question: "Check if the array contains the boolean value false",
    data: [true, false, false],
    expected_result: [true],
    solution: "data.includes(false)",
    category: "includes",
  },
  {
    question: "Check if the array contains the number 0",
    data: [0, 1, 2, 3, 4],
    expected_result: [true],
    solution: "data.includes(0)",
    category: "includes",
  },
  {
    question: 'Check if the array contains the string "hello"',
    data: ["hi", "hello", "world"],
    expected_result: [true],
    solution: 'data.includes("hello")',
    category: "includes",
  },
  {
    question: "Filter all even numbers from the array",
    data: [1, 2, 3, 4, 5],
    expected_result: [2, 4],
    solution: "data.filter(x => x % 2 === 0)",
    category: "filter",
  },
  {
    question: "Filter all numbers greater than 3 from the array",
    data: [1, 2, 3, 4, 5],
    expected_result: [4, 5],
    solution: "data.filter(x => x > 3)",
    category: "filter",
  },
  {
    question: 'Filter all strings that start with the letter "a"',
    data: ["apple", "banana", "avocado", "cherry"],
    expected_result: ["apple", "avocado"],
    solution: 'data.filter(x => x.startsWith("a"))',
    category: "filter",
  },
  {
    question: "Filter all strings with length greater than 5",
    data: ["apple", "banana", "avocado", "cherry"],
    expected_result: ["banana", "avocado"],
    solution: "data.filter(x => x.length > 5)",
    category: "filter",
  },
  {
    question: "Filter out all elements that are not numbers",
    data: [1, "apple", 3, "banana", 5],
    expected_result: [1, 3, 5],
    solution: 'data.filter(x => typeof x === "number")',
    category: "filter",
  },
  {
    question: "Filter all numbers less than or equal to 2",
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2],
    solution: "data.filter(x => x <= 2)",
    category: "filter",
  },
  {
    question: "Filter out all odd numbers from the array",
    data: [1, 2, 3, 4, 5],
    expected_result: [2, 4],
    solution: "data.filter(x => x % 2 === 0)",
    category: "filter",
  },
  {
    question: 'Filter strings that contain the letter "e"',
    data: ["apple", "banana", "cherry", "date"],
    expected_result: ["apple", "cherry", "date"],
    solution: 'data.filter(x => x.includes("e"))',
    category: "filter",
  },
  {
    question: "Filter out all negative numbers",
    data: [-1, 2, -3, 4, -5],
    expected_result: [2, 4],
    solution: "data.filter(x => x >= 0)",
    category: "filter",
  },
  {
    question: "Filter all numbers that are divisible by 3",
    data: [1, 2, 3, 4, 5, 6],
    expected_result: [3, 6],
    solution: "data.filter(x => x % 3 === 0)",
    category: "filter",
  },
  {
    question: "Filter out all empty strings from the array",
    data: ["apple", "", "banana", "", "cherry"],
    expected_result: ["apple", "banana", "cherry"],
    solution: 'data.filter(x => x !== "")',
    category: "filter",
  },
  {
    question: "Filter out all numbers that are even",
    data: [1, 2, 3, 4, 5, 6],
    expected_result: [1, 3, 5],
    solution: "data.filter(x => x % 2 !== 0)",
    category: "filter",
  },
  {
    question: "Filter all strings that are longer than 4 characters",
    data: ["cat", "dog", "elephant", "bat", "lion"],
    expected_result: ["elephant"],
    solution: "data.filter(x => x.length > 4)",
    category: "filter",
  },
  {
    question: "Filter out all falsy values from the array",
    data: [0, 1, false, true, "", "hello", NaN],
    expected_result: [1, true, "hello"],
    solution: "data.filter(Boolean)",
    category: "filter",
  },
  {
    question: "Filter out all numbers that are not divisible by 2 or 3",
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    expected_result: [2, 3, 6],
    solution: "data.filter(x => x % 2 === 0 || x % 3 === 0)",
    category: "filter",
  },
  {
    question: 'Filter out all elements containing the letter "b"',
    data: ["apple", "banana", "cherry", "blueberry", "grape"],
    expected_result: ["apple", "cherry", "grape"],
    solution: 'data.filter(x => !x.includes("b"))',
    category: "filter",
  },
  {
    question: "Filter all numbers greater than or equal to 10",
    data: [5, 12, 7, 20, 8],
    expected_result: [12, 20],
    solution: "data.filter(x => x >= 10)",
    category: "filter",
  },
  {
    question: 'Filter all strings that do not contain the letter "a"',
    data: ["apple", "banana", "cherry", "grape"],
    expected_result: ["cherry", "grape"],
    solution: 'data.filter(x => !x.includes("a"))',
    category: "filter",
  },
  {
    question: 'Filter out all objects with a missing "name" property',
    data: [{ name: "John" }, { age: 30 }, { name: "Jane" }, { city: "Berlin" }],
    expected_result: [{ name: "John" }, { name: "Jane" }],
    solution: "data.filter(x => x.name)",
    category: "filter",
  },
  {
    question: "Filter out all undefined values",
    data: [1, undefined, 2, undefined, 3],
    expected_result: [1, 2, 3],
    solution: "data.filter(x => x !== undefined)",
    category: "filter",
  },
  {
    question: 'Filter all strings that start with the letter "a"',
    data: ["apple", "banana", "apricot", "cherry", "avocado"],
    expected_result: ["apple", "apricot", "avocado"],
    solution: 'data.filter(x => x.startsWith("a"))',
    category: "filter",
  },
  {
    question: 'Filter out all objects that have a property "age" less than 18',
    data: [
      { name: "John", age: 22 },
      { name: "Jane", age: 16 },
      { name: "Mike", age: 30 },
    ],
    expected_result: [{ name: "Jane", age: 16 }],
    solution: "data.filter(x => x.age <= 18)",
    category: "filter",
  },
  {
    question: "Filter out all elements that are not numbers",
    data: [1, "apple", 3, "banana", 5, "cherry"],
    expected_result: [1, 3, 5],
    solution: 'data.filter(x => typeof x === "number")',
    category: "filter",
  },
  {
    question:
      'Filter out all objects with a property "status" equal to "inactive"',
    data: [
      { name: "John", status: "active" },
      { name: "Jane", status: "inactive" },
      { name: "Mike", status: "active" },
    ],
    expected_result: [
      { name: "John", status: "active" },
      { name: "Mike", status: "active" },
    ],
    solution: 'data.filter(x => x.status !== "inactive")',
    category: "filter",
  },
  {
    question:
      "Filter all numbers greater than or equal to the average of the array",
    data: [2, 4, 6, 8, 10],
    expected_result: [6, 8, 10],
    solution:
      "data.filter(x => x >= (data.reduce((a, b) => a + b) / data.length))",
    category: "filter",
  },
  {
    question: "Check if all numbers in the array are positive",
    data: [1, 2, 3, 4, 5],
    expected_result: true,
    solution: "data.every(x => x > 0)",
    category: "every",
  },
  {
    question: "Check if all strings in the array have a length greater than 3",
    data: ["apple", "banana", "cherry", "date"],
    expected_result: true,
    solution: "data.every(x => x.length > 3)",
    category: "every",
  },
  {
    question: "Check if all numbers are divisible by 2",
    data: [2, 4, 6, 8],
    expected_result: true,
    solution: "data.every(x => x % 2 === 0)",
    category: "every",
  },
  {
    question: "Check if all numbers in the array are greater than 10",
    data: [12, 15, 20],
    expected_result: true,
    solution: "data.every(x => x > 10)",
    category: "every",
  },
  {
    question: "Check if all elements in the array are strings",
    data: ["apple", "banana", "cherry"],
    expected_result: true,
    solution: 'data.every(x => typeof x === "string")',
    category: "every",
  },
  {
    question: "Check if all numbers are odd",
    data: [1, 3, 5, 7],
    expected_result: true,
    solution: "data.every(x => x % 2 !== 0)",
    category: "every",
  },
  {
    question: "Check if all elements are less than 100",
    data: [99, 50, 30, 70],
    expected_result: true,
    solution: "data.every(x => x < 100)",
    category: "every",
  },
  {
    question:
      'Check if all objects have the property "status" with the value "active"',
    data: [
      { name: "John", status: "active" },
      { name: "Jane", status: "active" },
      { name: "Mike", status: "active" },
    ],
    expected_result: true,
    solution: 'data.every(x => x.status === "active")',
    category: "every",
  },
  {
    question: "Check if all numbers are between 1 and 10",
    data: [2, 3, 5, 8],
    expected_result: true,
    solution: "data.every(x => x >= 1 && x <= 10)",
    category: "every",
  },
  {
    question: "Check if all elements in the array are even numbers",
    data: [2, 4, 6, 8],
    expected_result: true,
    solution: "data.every(x => x % 2 === 0)",
    category: "every",
  },
  {
    question: "Check if there are any positive numbers in the array",
    data: [-1, -2, 3, -4, -5],
    expected_result: true,
    solution: "data.some(x => x > 0)",
    category: "some",
  },
  {
    question: "Check if any string in the array has a length greater than 6",
    data: ["apple", "banana", "cherry", "date"],
    expected_result: true,
    solution: "data.some(x => x.length > 6)",
    category: "some",
  },
  {
    question: "Check if any number in the array is divisible by 3",
    data: [2, 4, 5, 6, 8],
    expected_result: true,
    solution: "data.some(x => x % 3 === 0)",
    category: "some",
  },
  {
    question: 'Check if any string in the array contains the letter "a"',
    data: ["apple", "banana", "cherry", "kiwi"],
    expected_result: true,
    solution: 'data.some(x => x.includes("a"))',
    category: "some",
  },
  {
    question: "Check if any number in the array is less than 0",
    data: [1, 2, 3, -4, 5],
    expected_result: true,
    solution: "data.some(x => x < 0)",
    category: "some",
  },
  {
    question: "Check if any number in the array is an odd number",
    data: [2, 4, 6, 7, 8],
    expected_result: true,
    solution: "data.some(x => x % 2 !== 0)",
    category: "some",
  },
  {
    question: "Check if any element in the array is a string",
    data: [1, 2, "hello", 4],
    expected_result: true,
    solution: 'data.some(x => typeof x === "string")',
    category: "some",
  },
  {
    question:
      'Check if any object in the array has the property "status" equal to "inactive"',
    data: [
      { name: "John", status: "active" },
      { name: "Jane", status: "inactive" },
      { name: "Mike", status: "active" },
    ],
    expected_result: true,
    solution: 'data.some(x => x.status === "inactive")',
    category: "some",
  },
  {
    question: "Check if any element in the array is greater than 100",
    data: [50, 75, 200, 10],
    expected_result: true,
    solution: "data.some(x => x > 100)",
    category: "some",
  },
  {
    question: "Check if any number in the array is equal to 0",
    data: [1, 2, 3, 0, 5],
    expected_result: true,
    solution: "data.some(x => x === 0)",
    category: "some",
  },
  {
    question: "Fill the array with the number 5",
    data: [1, 2, 3, 4],
    expected_result: [5, 5, 5, 5],
    solution: "data.fill(5)",
    category: "fill",
  },
  {
    question: 'Fill the first 3 elements of the array with the value "x"',
    data: [1, 2, 3, 4, 5],
    expected_result: ["x", "x", "x", 4, 5],
    solution: 'data.fill("x", 0, 3)',
    category: "fill",
  },
  {
    question: "Fill the entire array with the value true",
    data: [false, false, false],
    expected_result: [true, true, true],
    solution: "data.fill(true)",
    category: "fill",
  },
  {
    question: "Fill the array starting from index 2 with the number 0",
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2, 0, 0, 0],
    solution: "data.fill(0, 2)",
    category: "fill",
  },
  {
    question: 'Fill the array from index 1 to index 3 with the string "filled"',
    data: ["apple", "banana", "cherry", "date"],
    expected_result: ["apple", "filled", "filled", "date"],
    solution: 'data.fill("filled", 1, 3)',
    category: "fill",
  },
  {
    question: 'Fill all the elements of the array with "N/A"',
    data: [null, null, null],
    expected_result: ["N/A", "N/A", "N/A"],
    solution: 'data.fill("N/A")',
    category: "fill",
  },
  {
    question: "Fill the array with the value 0 for the first 4 elements",
    data: [10, 20, 30, 40, 50],
    expected_result: [0, 0, 0, 0, 50],
    solution: "data.fill(0, 0, 4)",
    category: "fill",
  },
  {
    question: "Fill the entire array with the number 100",
    data: [1, 2, 3, 4, 5, 6],
    expected_result: [100, 100, 100, 100, 100, 100],
    solution: "data.fill(100)",
    category: "fill",
  },
  {
    question: 'Fill the array from index 2 to the end with the string "empty"',
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2, "empty", "empty", "empty"],
    solution: 'data.fill("empty", 2)',
    category: "fill",
  },
  {
    question: "Fill the first 2 elements of the array with 0",
    data: [7, 8, 9],
    expected_result: [0, 0, 9],
    solution: "data.fill(0, 0, 2)",
    category: "fill",
  },

  {
    question: "Sum all elements in the array",
    data: [1, 2, 3, 4, 5],
    expected_result: 15,
    solution: "data.reduce((acc, curr) => acc + curr, 0)",
    category: "reduce",
  },
  {
    question: "Find the maximum value in the array",
    data: [7, 8, 2, 5, 3],
    expected_result: 8,
    solution: "data.reduce((max, curr) => curr > max ? curr : max, data[0])",
    category: "reduce",
  },
  {
    question: "Find the minimum value in the array",
    data: [12, 45, 3, 8, 1],
    expected_result: 1,
    solution: "data.reduce((min, curr) => curr < min ? curr : min, data[0])",
    category: "reduce",
  },
  {
    question: "Concatenate all elements in the array into a single string",
    data: ["apple", "banana", "cherry"],
    expected_result: "applebananacherry",
    solution: 'data.reduce((acc, curr) => acc + curr, "")',
    category: "reduce",
  },
  {
    question: "Multiply all elements in the array together",
    data: [1, 2, 3, 4],
    expected_result: 24,
    solution: "data.reduce((acc, curr) => acc * curr, 1)",
    category: "reduce",
  },
  {
    question: "Count the occurrences of the number 2 in the array",
    data: [1, 2, 2, 3, 2],
    expected_result: 3,
    solution: "data.reduce((count, curr) => curr === 2 ? count + 1 : count, 0)",
    category: "reduce",
  },
  {
    question: "Flatten a nested array of arrays",
    data: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected_result: [1, 2, 3, 4, 5, 6],
    solution: "data.reduce((acc, curr) => acc.concat(curr), [])",
    category: "reduce",
  },
  {
    question:
      "Create an object where the keys are the array indices and the values are the array elements",
    data: ["a", "b", "c"],
    expected_result: { 0: "a", 1: "b", 2: "c" },
    solution:
      "data.reduce((acc, curr, index) => { acc[index] = curr; return acc; }, {})",
    category: "reduce",
  },
  {
    question: "Find the sum of even numbers in the array",
    data: [1, 2, 3, 4, 5, 6],
    expected_result: 12,
    solution:
      "data.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0)",
    category: "reduce",
  },
  {
    question:
      "Create a string from the array where each element is separated by a hyphen",
    data: ["one", "two", "three"],
    expected_result: "one-two-three",
    solution: 'data.reduce((acc, curr) => acc + "-" + curr)',
    category: "reduce",
  },

  {
    question: "Find the sum of all odd numbers in the array",
    data: [1, 2, 3, 4, 5, 6],
    expected_result: 9,
    solution:
      "data.reduce((acc, curr) => curr % 2 !== 0 ? acc + curr : acc, 0)",
    category: "reduce",
  },
  {
    question: "Count how many times the number 10 appears in the array",
    data: [10, 20, 10, 30, 10],
    expected_result: 3,
    solution:
      "data.reduce((count, curr) => curr === 10 ? count + 1 : count, 0)",
    category: "reduce",
  },
  {
    question: "Create a single object from an array of key-value pairs",
    data: [
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ],
    expected_result: { a: 1, b: 2, c: 3 },
    solution:
      "data.reduce((acc, [key, value]) => { acc[key] = value; return acc; }, {})",
    category: "reduce",
  },
  {
    question: "Calculate the average of all numbers in the array",
    data: [10, 20, 30, 40],
    expected_result: 25,
    solution: "data.reduce((acc, curr) => acc + curr, 0) / data.length",
    category: "reduce",
  },
  {
    question: "Concatenate all elements in the array with a space between them",
    data: ["Hello", "world", "how", "are", "you"],
    expected_result: "Hello world how are you",
    solution: 'data.reduce((acc, curr) => acc + " " + curr)',
    category: "reduce",
  },
  {
    question: "Convert an array of strings to an array of their lengths",
    data: ["apple", "banana", "cherry"],
    expected_result: [5, 6, 6],
    solution:
      "data.reduce((acc, curr) => { acc.push(curr.length); return acc; }, [])",
    category: "reduce",
  },
  {
    question: "Group the elements of the array into even and odd numbers",
    data: [1, 2, 3, 4, 5, 6],
    expected_result: { even: [2, 4, 6], odd: [1, 3, 5] },
    solution:
      "data.reduce((acc, curr) => { curr % 2 === 0 ? acc.even.push(curr) : acc.odd.push(curr); return acc; }, {even: [], odd: []})",
    category: "reduce",
  },
  {
    question: "Find the product of all elements in the array",
    data: [2, 3, 4],
    expected_result: 24,
    solution: "data.reduce((acc, curr) => acc * curr, 1)",
    category: "reduce",
  },
  {
    question: "Create a new array with elements doubled",
    data: [1, 2, 3],
    expected_result: [2, 4, 6],
    solution:
      "data.reduce((acc, curr) => { acc.push(curr * 2); return acc; }, [])",
    category: "reduce",
  },
  {
    question: "Find the longest string in the array",
    data: ["apple", "banana", "cherry", "grape"],
    expected_result: "banana",
    solution:
      'data.reduce((longest, curr) => curr.length > longest.length ? curr : longest, "")',
    category: "reduce",
  },
  {
    question: "Flatten a deeply nested array",
    data: [
      [1, 2, [3, 4]],
      [5, [6, 7]],
    ],
    expected_result: [1, 2, 3, 4, 5, 6, 7],
    solution:
      "data.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? curr.reduce((a, b) => a.concat(b), []) : curr), [])",
    category: "reduce",
  },
  {
    question:
      "Create a new array of objects where each object has the number as key and its square as value",
    data: [1, 2, 3, 4],
    expected_result: [{ 1: 1 }, { 2: 4 }, { 3: 9 }, { 4: 16 }],
    solution:
      "data.reduce((acc, curr) => { acc.push({[curr]: curr * curr}); return acc; }, [])",
    category: "reduce",
  },
  {
    question:
      "Find the difference between the maximum and minimum numbers in the array",
    data: [4, 7, 1, 9, 2],
    expected_result: 8,
    solution:
      "data.reduce((acc, curr) => { acc.min = Math.min(acc.min, curr); acc.max = Math.max(acc.max, curr); return acc; }, {min: Infinity, max: -Infinity})",
    category: "reduce",
  },
  {
    question: "Create an array that only contains numbers greater than 5",
    data: [2, 3, 6, 8, 1],
    expected_result: [6, 8],
    solution: "data.reduce((acc, curr) => curr > 5 ? [...acc, curr] : acc, [])",
    category: "reduce",
  },
  {
    question: "Find the total length of all strings in the array",
    data: ["apple", "banana", "cherry"],
    expected_result: 16,
    solution: "data.reduce((acc, curr) => acc + curr.length, 0)",
    category: "reduce",
  },
  {
    question:
      "Combine all objects in the array into one object, merging their properties",
    data: [{ a: 1 }, { b: 2 }, { c: 3 }],
    expected_result: { a: 1, b: 2, c: 3 },
    solution: "data.reduce((acc, curr) => ({...acc, ...curr}), {})",
    category: "reduce",
  },
  {
    question: "Reverse the order of elements in the array",
    data: [1, 2, 3, 4],
    expected_result: [4, 3, 2, 1],
    solution: "data.reduce((acc, curr) => [curr, ...acc], [])",
    category: "reduce",
  },
  {
    question: "Check if the array contains only even numbers",
    data: [2, 4, 6, 8],
    expected_result: true,
    solution: "data.reduce((acc, curr) => acc && curr % 2 === 0, true)",
    category: "reduce",
  },
  {
    question: "Find the sum of all numbers in the array except the first one",
    data: [10, 20, 30, 40],
    expected_result: 90,
    solution: "data.slice(1).reduce((acc, curr) => acc + curr, 0)",
    category: "reduce",
  },
  {
    question: "Create an array of only the unique values from the array",
    data: [1, 2, 2, 3, 3, 4],
    expected_result: [1, 2, 3, 4],
    solution:
      "data.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])",
    category: "reduce",
  },
  {
    question: "Merge two arrays into one array",
    data: [
      [1, 2],
      [3, 4],
    ],
    expected_result: [1, 2, 3, 4],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },
  {
    question: "Join two arrays with a string between them",
    data: [
      ["a", "b"],
      ["c", "d"],
    ],
    expected_result: ["a", "b", "c", "d"],
    solution: 'data[0].concat(" ", data[1])',
    category: "concat",
  },
  {
    question: "Add an element to the beginning of an array using concat",
    data: [[1, 2, 3], 0],
    expected_result: [0, 1, 2, 3],
    solution: "data[1].concat(data[0])",
    category: "concat",
  },
  {
    question: "Concatenate three arrays into one array",
    data: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected_result: [1, 2, 3, 4, 5, 6],
    solution: "data[0].concat(data[1], data[2])",
    category: "concat",
  },
  {
    question: "Combine an array of strings with a single array of numbers",
    data: [
      ["apple", "banana"],
      [1, 2, 3],
    ],
    expected_result: ["apple", "banana", 1, 2, 3],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },
  {
    question: "Concatenate an array of elements with an array of empty strings",
    data: [
      ["apple", "banana"],
      ["", "", ""],
    ],
    expected_result: ["apple", "banana", "", "", ""],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },
  {
    question: "Combine arrays of objects into a single array of objects",
    data: [[{ id: 1, name: "John" }], [{ id: 2, name: "Jane" }]],
    expected_result: [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },
  {
    question: "Add multiple elements to an array using concat",
    data: [[1, 2, 3], 4, 5, 6],
    expected_result: [1, 2, 3, 4, 5, 6],
    solution: "data[0].concat(4, 5, 6)",
    category: "concat",
  },
  {
    question:
      "Combine an array with another array containing null and undefined values",
    data: [
      [1, 2, 3],
      [null, undefined],
    ],
    expected_result: [1, 2, 3, null, undefined],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },
  {
    question: "Concatenate an array with an empty array",
    data: [[1, 2, 3], []],
    expected_result: [1, 2, 3],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },

  {
    question: "Concatenate two arrays of numbers and sort the result",
    data: [
      [4, 3],
      [1, 2],
    ],
    expected_result: [1, 2, 3, 4],
    solution: "data[0].concat(data[1]).sort((a, b) => a - b)",
    category: "concat",
  },
  {
    question:
      "Merge multiple arrays of strings into one array with spaces between them",
    data: [["apple", "banana"], ["cherry", "date"], ["elderberry"]],
    expected_result: ["apple", "banana", "cherry", "date", "elderberry"],
    solution: "data[0].concat(data[1], data[2])",
    category: "concat",
  },
  {
    question: "Add a string to the end of an array of numbers",
    data: [[1, 2, 3], "end"],
    expected_result: [1, 2, 3, "end"],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },
  {
    question:
      "Combine arrays of different types: numbers, strings, and booleans",
    data: [
      [1, 2],
      ["apple", "banana"],
      [true, false],
    ],
    expected_result: [1, 2, "apple", "banana", true, false],
    solution: "data[0].concat(data[1], data[2])",
    category: "concat",
  },
  {
    question: "Merge an array of objects with another array of numbers",
    data: [
      [{ a: 1 }, { b: 2 }],
      [3, 4, 5],
    ],
    expected_result: [{ a: 1 }, { b: 2 }, 3, 4, 5],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },
  {
    question: "Combine a nested array with other arrays and flatten them",
    data: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected_result: [1, 2, 3, 4, 5, 6],
    solution: "data[0].concat(data[1], data[2])",
    category: "concat",
  },
  {
    question: "Merge an array of integers with an array of strings",
    data: [
      [1, 2, 3],
      ["one", "two", "three"],
    ],
    expected_result: [1, 2, 3, "one", "two", "three"],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },
  {
    question: "Concatenate two arrays and insert a number in between them",
    data: [[10, 20], 30, [40, 50]],
    expected_result: [10, 20, 30, 40, 50],
    solution: "data[0].concat(data[1], data[2])",
    category: "concat",
  },
  {
    question:
      "Add elements of different types (number, string, object) to an array",
    data: [[1, 2], "hello", { key: "value" }],
    expected_result: [1, 2, "hello", { key: "value" }],
    solution: "data[0].concat(data[1], data[2])",
    category: "concat",
  },
  {
    question:
      "Merge an array with a large number of elements with a small array",
    data: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [10]],
    expected_result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    solution: "data[0].concat(data[1])",
    category: "concat",
  },

  {
    question: "Reverse the order of elements in the array",
    data: [1, 2, 3, 4, 5],
    expected_result: [5, 4, 3, 2, 1],
    solution: "data.reverse()",
    category: "reverse",
  },
  {
    question: "Reverse an array of strings",
    data: ["apple", "banana", "cherry"],
    expected_result: ["cherry", "banana", "apple"],
    solution: "data.reverse()",
    category: "reverse",
  },
  {
    question: "Reverse an array of numbers and sum all elements",
    data: [1, 2, 3, 4],
    expected_result: 10,
    solution: "data.reverse().reduce((acc, curr) => acc + curr, 0)",
    category: "reverse",
  },
  {
    question: "Reverse an array of booleans",
    data: [true, false, true, false],
    expected_result: [false, true, false, true],
    solution: "data.reverse()",
    category: "reverse",
  },
  {
    question: "Reverse an array of mixed types: numbers, strings, and booleans",
    data: [1, "hello", true, 2, "world", false],
    expected_result: [false, "world", 2, true, "hello", 1],
    solution: "data.reverse()",
    category: "reverse",
  },
  {
    question: "Reverse an array and return only the last 3 elements",
    data: [10, 20, 30, 40, 50],
    expected_result: [50, 40, 30],
    solution: "data.reverse().slice(0, 3)",
    category: "reverse",
  },
  {
    question: "Reverse the order of an array of objects",
    data: [{ a: 1 }, { b: 2 }, { c: 3 }],
    expected_result: [{ c: 3 }, { b: 2 }, { a: 1 }],
    solution: "data.reverse()",
    category: "reverse",
  },
  {
    question:
      "Reverse an array of numbers and return a new array without modifying the original",
    data: [1, 2, 3, 4],
    expected_result: [4, 3, 2, 1],
    solution: "[...data].reverse()",
    category: "reverse",
  },
  {
    question: "Reverse the order of characters in each string in the array",
    data: ["apple", "banana", "cherry"],
    expected_result: ["elppa", "ananab", "yrrehc"],
    solution: 'data.map(str => str.split("").reverse().join(""))',
    category: "reverse",
  },
  {
    question: "Reverse an array of arrays",
    data: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected_result: [
      [5, 6],
      [3, 4],
      [1, 2],
    ],
    solution: "data.reverse()",
    category: "reverse",
  },

  {
    question: "Sort an array of numbers in ascending order",
    data: [4, 2, 5, 1, 3],
    expected_result: [1, 2, 3, 4, 5],
    solution: "data.sort((a, b) => a - b)",
    category: "sort",
  },
  {
    question: "Sort an array of strings alphabetically",
    data: ["banana", "apple", "cherry"],
    expected_result: ["apple", "banana", "cherry"],
    solution: "data.sort()",
    category: "sort",
  },
  {
    question: "Sort an array of numbers in descending order",
    data: [3, 1, 4, 2],
    expected_result: [4, 3, 2, 1],
    solution: "data.sort((a, b) => b - a)",
    category: "sort",
  },
  {
    question: "Sort an array of mixed numbers and strings",
    data: [10, "apple", 5, "banana", 2],
    expected_result: ["apple", "banana", 2, 5, 10],
    solution:
      'data.sort((a, b) => (typeof a === "string" ? a : "") > (typeof b === "string" ? b : "") ? 1 : -1)',
    category: "sort",
  },
  {
    question: "Sort an array of objects by a specific property (age)",
    data: [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Doe", age: 35 },
    ],
    expected_result: [
      { name: "Jane", age: 25 },
      { name: "John", age: 30 },
      { name: "Doe", age: 35 },
    ],
    solution: "data.sort((a, b) => a.age - b.age)",
    category: "sort",
  },
  {
    question: "Sort an array of strings by length",
    data: ["apple", "banana", "kiwi", "grape"],
    expected_result: ["kiwi", "grape", "apple", "banana"],
    solution: "data.sort((a, b) => a.length - b.length)",
    category: "sort",
  },
  {
    question: "Sort an array of numbers and strings, putting strings first",
    data: [5, "apple", 2, "banana", 4],
    expected_result: ["apple", "banana", 2, 4, 5],
    solution: 'data.sort((a, b) => (typeof a === "string" ? -1 : 1))',
    category: "sort",
  },
  {
    question: "Sort an array of dates in descending order",
    data: ["2025-02-06", "2020-05-10", "2021-01-01"],
    expected_result: ["2025-02-06", "2021-01-01", "2020-05-10"],
    solution: "data.sort((a, b) => new Date(b) - new Date(a))",
    category: "sort",
  },
  {
    question:
      "Sort an array of numbers in ascending order, treating them as strings",
    data: [10, 2, 1, 21],
    expected_result: [1, 10, 2, 21],
    solution: "data.sort()",
    category: "sort",
  },
  {
    question:
      "Sort an array of objects by multiple properties (age, then name)",
    data: [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Doe", age: 25 },
    ],
    expected_result: [
      { name: "Doe", age: 25 },
      { name: "Jane", age: 25 },
      { name: "John", age: 30 },
    ],
    solution:
      "data.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name))",
    category: "sort",
  },

  {
    question:
      "Sort an array of numbers in ascending order, ignoring negative signs",
    data: [-10, 5, -2, 7],
    expected_result: [-10, -2, 5, 7],
    solution: "data.sort((a, b) => Math.abs(a) - Math.abs(b))",
    category: "sort",
  },
  {
    question:
      "Sort an array of numbers by their absolute values in descending order",
    data: [10, -5, 2, -8],
    expected_result: [10, -8, -5, 2],
    solution: "data.sort((a, b) => Math.abs(b) - Math.abs(a))",
    category: "sort",
  },
  {
    question: "Sort an array of strings in reverse alphabetical order",
    data: ["apple", "banana", "cherry"],
    expected_result: ["cherry", "banana", "apple"],
    solution: "data.sort().reverse()",
    category: "sort",
  },
  {
    question: "Sort an array of boolean values (true first)",
    data: [false, true, true, false],
    expected_result: [true, true, false, false],
    solution: "data.sort((a, b) => b - a)",
    category: "sort",
  },
  {
    question: "Sort an array of objects by a numerical property (price)",
    data: [
      { product: "apple", price: 10 },
      { product: "banana", price: 5 },
      { product: "cherry", price: 15 },
    ],
    expected_result: [
      { product: "banana", price: 5 },
      { product: "apple", price: 10 },
      { product: "cherry", price: 15 },
    ],
    solution: "data.sort((a, b) => a.price - b.price)",
    category: "sort",
  },
  {
    question:
      "Sort an array of strings based on the frequency of each character (most frequent first)",
    data: ["apple", "banana", "kiwi"],
    expected_result: ["banana", "apple", "kiwi"],
    solution: 'data.sort((a, b) => b.split("a").length - a.split("a").length)',
    category: "sort",
  },
  {
    question:
      "Sort an array of arrays based on the length of each inner array (shortest first)",
    data: [[1, 2], [1, 2, 3], [1]],
    expected_result: [[1], [1, 2], [1, 2, 3]],
    solution: "data.sort((a, b) => a.length - b.length)",
    category: "sort",
  },
  {
    question:
      "Sort an array of objects by a string property (name) in reverse order",
    data: [{ name: "John" }, { name: "Jane" }, { name: "Doe" }],
    expected_result: [{ name: "John" }, { name: "Jane" }, { name: "Doe" }],
    solution: "data.sort((a, b) => b.name.localeCompare(a.name))",
    category: "sort",
  },
  {
    question:
      "Sort an array of numbers by the sum of their digits (lowest sum first)",
    data: [23, 41, 12, 34],
    expected_result: [12, 23, 34, 41],
    solution: "data.sort((a, b) => sumOfDigits(a) - sumOfDigits(b))",
    category: "sort",
    custom_function:
      'function sumOfDigits(num) { return num.toString().split("").reduce((acc, val) => acc + Number(val), 0); }',
  },
  {
    question: "Sort an array of dates in ascending order of year",
    data: ["2025-02-06", "2020-05-10", "2021-01-01"],
    expected_result: ["2020-05-10", "2021-01-01", "2025-02-06"],
    solution:
      "data.sort((a, b) => new Date(a).getFullYear() - new Date(b).getFullYear())",
    category: "sort",
  },

  {
    question:
      "Join the elements of an array of numbers into a string with commas",
    data: [1, 2, 3, 4],
    expected_result: "1,2,3,4",
    solution: "data.join()",
    category: "join",
  },
  {
    question:
      "Join an array of strings into a single string with a space between them",
    data: ["apple", "banana", "cherry"],
    expected_result: "apple banana cherry",
    solution: 'data.join(" ")',
    category: "join",
  },
  {
    question:
      "Join an array of strings into a single string with a hyphen between each element",
    data: ["one", "two", "three"],
    expected_result: "one-two-three",
    solution: 'data.join("-")',
    category: "join",
  },
  {
    question:
      "Join an array of numbers into a string with semicolons between the numbers",
    data: [10, 20, 30],
    expected_result: "10;20;30",
    solution: 'data.join(";")',
    category: "join",
  },
  {
    question: "Join an array of strings and add a period at the end",
    data: ["The", "quick", "brown", "fox"],
    expected_result: "The quick brown fox.",
    solution: 'data.join(" ") + "."',
    category: "join",
  },
  {
    question: "Join an array of words into a string with no spaces or commas",
    data: ["Hello", "World"],
    expected_result: "HelloWorld",
    solution: 'data.join("")',
    category: "join",
  },
  {
    question:
      "Join an array of characters into a string and separate them with a comma",
    data: ["a", "b", "c", "d"],
    expected_result: "a,b,c,d",
    solution: 'data.join(",")',
    category: "join",
  },
  {
    question: "Join an array of strings and reverse the order of elements",
    data: ["apple", "banana", "cherry"],
    expected_result: "cherry banana apple",
    solution: 'data.reverse().join(" ")',
    category: "join",
  },
  {
    question: "Join an array of numbers and place a space after each comma",
    data: [5, 10, 15, 20],
    expected_result: "5, 10, 15, 20",
    solution: 'data.join(", ")',
    category: "join",
  },
  {
    question: "Join an array of booleans into a string with no separator",
    data: [true, false, true],
    expected_result: "truefalsetrue",
    solution: 'data.join("")',
    category: "join",
  },
  {
    question: "Flatten a nested array with two levels of nesting",
    data: [1, [2, 3], [4, [5, 6]]],
    expected_result: [1, 2, 3, 4, [5, 6]],
    solution: "data.flat()",
    category: "flat",
  },
  {
    question: "Flatten an array with three levels of nesting",
    data: [1, [2, [3, 4], 5], [6, 7]],
    expected_result: [1, 2, [3, 4], 5, 6, 7],
    solution: "data.flat()",
    category: "flat",
  },
  {
    question: "Flatten an array of arrays into a single-level array",
    data: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected_result: [1, 2, 3, 4, 5, 6],
    solution: "data.flat()",
    category: "flat",
  },
  {
    question: "Flatten an array of arrays, but only one level deep",
    data: [1, [2, 3], [4, 5]],
    expected_result: [1, 2, 3, 4, 5],
    solution: "data.flat(1)",
    category: "flat",
  },
  {
    question: "Flatten a deeply nested array to a single level",
    data: [1, [2, [3, [4, 5]]], 6],
    expected_result: [1, 2, 3, [4, 5], 6],
    solution: "data.flat()",
    category: "flat",
  },
  {
    question:
      "Flatten an array of numbers and strings, nested at different levels",
    data: [1, [2, "apple", [3, "banana"]], [4, "cherry"]],
    expected_result: [1, 2, "apple", 3, "banana", 4, "cherry"],
    solution: "data.flat()",
    category: "flat",
  },
  {
    question:
      "Flatten an array with mixed data types and multiple levels of nesting",
    data: [1, ["a", ["b", 2]], [3, ["c", 4]]],
    expected_result: [1, "a", "b", 2, 3, "c", 4],
    solution: "data.flat()",
    category: "flat",
  },
  {
    question: "Flatten an array with only one nested level",
    data: [1, [2, 3, 4]],
    expected_result: [1, 2, 3, 4],
    solution: "data.flat()",
    category: "flat",
  },
  {
    question:
      "Flatten a deeply nested array and keep only the first level of elements",
    data: [1, [2, [3, [4, 5]]], 6],
    expected_result: [1, 2, [3, [4, 5]], 6],
    solution: "data.flat(1)",
    category: "flat",
  },
  {
    question:
      "Flatten a deeply nested array and apply a custom depth for flattening",
    data: [1, [2, [3, [4, [5]]]]],
    expected_result: [1, 2, 3, [4, [5]]],
    solution: "data.flat(2)",
    category: "flat",
  },
  {
    question: "Find the first even number in an array of numbers",
    data: [1, 3, 5, 7, 8, 10],
    expected_result: 8,
    solution: "data.find(num => num % 2 === 0)",
    category: "find",
  },
  {
    question:
      'Find the first string that starts with the letter "a" in an array of strings',
    data: ["banana", "apple", "cherry", "grape"],
    expected_result: "apple",
    solution: 'data.find(str => str.startsWith("a"))',
    category: "find",
  },
  {
    question: "Find the first number greater than 10 in an array of numbers",
    data: [5, 8, 12, 3, 9],
    expected_result: 12,
    solution: "data.find(num => num > 10)",
    category: "find",
  },
  {
    question:
      'Find the first object in an array that has a specific property value (name: "John")',
    data: [{ name: "Alice" }, { name: "John" }, { name: "Bob" }],
    expected_result: { name: "John" },
    solution: 'data.find(obj => obj.name === "John")',
    category: "find",
  },
  {
    question:
      "Find the first element in an array of numbers that is divisible by 3",
    data: [4, 5, 9, 12],
    expected_result: 9,
    solution: "data.find(num => num % 3 === 0)",
    category: "find",
  },
  {
    question:
      "Find the first person older than 30 from an array of people objects",
    data: [
      { name: "John", age: 28 },
      { name: "Jane", age: 35 },
      { name: "Bob", age: 40 },
    ],
    expected_result: { name: "Jane", age: 35 },
    solution: "data.find(person => person.age > 30)",
    category: "find",
  },
  {
    question: "Find the first number in an array that is a perfect square",
    data: [2, 3, 4, 5, 9],
    expected_result: 4,
    solution: "data.find(num => Math.sqrt(num) % 1 === 0)",
    category: "find",
  },
  {
    question: 'Find the first object with a "price" property greater than 100',
    data: [
      { item: "apple", price: 50 },
      { item: "banana", price: 120 },
      { item: "cherry", price: 80 },
    ],
    expected_result: { item: "banana", price: 120 },
    solution: "data.find(obj => obj.price > 100)",
    category: "find",
  },
  {
    question:
      "Find the first string with more than 5 characters in an array of strings",
    data: ["cat", "elephant", "dog", "giraffe"],
    expected_result: "elephant",
    solution: "data.find(str => str.length > 5)",
    category: "find",
  },
  {
    question: "Find the first negative number in an array of mixed numbers",
    data: [7, 8, -3, 2, 5],
    expected_result: -3,
    solution: "data.find(num => num < 0)",
    category: "find",
  },

  {
    question: "Find the first negative number in an array of numbers",
    data: [1, 3, 7, -5, 9],
    expected_result: -5,
    solution: "data.find(num => num < 0)",
    category: "find",
  },
  {
    question:
      'Find the first string that contains the letter "z" in an array of strings',
    data: ["apple", "banana", "zebra", "cherry"],
    expected_result: "zebra",
    solution: 'data.find(str => str.includes("z"))',
    category: "find",
  },
  {
    question:
      'Find the first object in an array of objects with a "completed" status set to true',
    data: [
      { task: "Do laundry", completed: false },
      { task: "Buy groceries", completed: true },
      { task: "Clean room", completed: false },
    ],
    expected_result: { task: "Buy groceries", completed: true },
    solution: "data.find(obj => obj.completed === true)",
    category: "find",
  },
  {
    question:
      "Find the first number in an array that is divisible by both 2 and 3",
    data: [5, 6, 8, 12, 15],
    expected_result: 6,
    solution: "data.find(num => num % 2 === 0 && num % 3 === 0)",
    category: "find",
  },
  {
    question:
      'Find the first element in an array of objects that has a property "price" less than 50',
    data: [
      { item: "apple", price: 40 },
      { item: "banana", price: 60 },
      { item: "cherry", price: 30 },
    ],
    expected_result: { item: "apple", price: 40 },
    solution: "data.find(obj => obj.price < 50)",
    category: "find",
  },
  {
    question: "Find the first string in an array with more than 6 characters",
    data: ["apple", "banana", "grape", "kiwi"],
    expected_result: "banana",
    solution: "data.find(str => str.length > 6)",
    category: "find",
  },
  {
    question:
      "Find the first even number greater than 10 in an array of numbers",
    data: [5, 3, 12, 8, 20],
    expected_result: 12,
    solution: "data.find(num => num > 10 && num % 2 === 0)",
    category: "find",
  },
  {
    question: "Find the first number greater than 100 in an array of numbers",
    data: [45, 60, 120, 150],
    expected_result: 120,
    solution: "data.find(num => num > 100)",
    category: "find",
  },
  {
    question:
      'Find the first object in an array with a "name" property starting with "A"',
    data: [{ name: "John" }, { name: "Alice" }, { name: "Bob" }],
    expected_result: { name: "Alice" },
    solution: 'data.find(obj => obj.name.startsWith("A"))',
    category: "find",
  },
  {
    question: "Find the first number in an array that is a multiple of 7",
    data: [1, 2, 3, 14, 21],
    expected_result: 14,
    solution: "data.find(num => num % 7 === 0)",
    category: "find",
  },
  {
    question: "Find the first odd number in an array of numbers",
    data: [2, 4, 6, 7, 8],
    expected_result: 7,
    solution: "data.find(num => num % 2 !== 0)",
    category: "find",
  },
  {
    question:
      'Find the first element in an array of strings that contains "cat"',
    data: ["dog", "cat", "rabbit", "bird"],
    expected_result: "cat",
    solution: 'data.find(str => str.includes("cat"))',
    category: "find",
  },
  {
    question:
      'Find the first object in an array that has a "name" property with value "Jane"',
    data: [{ name: "John" }, { name: "Jane" }, { name: "Alice" }],
    expected_result: { name: "Jane" },
    solution: 'data.find(obj => obj.name === "Jane")',
    category: "find",
  },
  {
    question: "Find the first number divisible by 5 in an array of numbers",
    data: [7, 9, 10, 15, 20],
    expected_result: 10,
    solution: "data.find(num => num % 5 === 0)",
    category: "find",
  },
  {
    question:
      'Find the first element in an array of objects where the "status" property is false',
    data: [
      { task: "Do homework", status: true },
      { task: "Buy groceries", status: false },
      { task: "Clean room", status: true },
    ],
    expected_result: { task: "Buy groceries", status: false },
    solution: "data.find(obj => obj.status === false)",
    category: "find",
  },
  {
    question: "Find the first string in an array that has more than 3 vowels",
    data: ["apple", "banana", "grape"],
    expected_result: "banana",
    solution: "data.find(str => (str.match(/[aeiou]/gi) || []).length > 3)",
    category: "find",
  },
  {
    question:
      'Find the first object that has a "completed" property set to false',
    data: [
      { task: "Do laundry", completed: true },
      { task: "Buy groceries", completed: false },
    ],
    expected_result: { task: "Buy groceries", completed: false },
    solution: "data.find(obj => obj.completed === false)",
    category: "find",
  },
  {
    question: "Find the first string with a length of exactly 5 characters",
    data: ["apple", "banana", "kiwi", "grape"],
    expected_result: "apple",
    solution: "data.find(str => str.length === 5)",
    category: "find",
  },
  {
    question:
      "Find the first number that is greater than 50 and less than 100 in an array",
    data: [25, 45, 60, 105],
    expected_result: 60,
    solution: "data.find(num => num > 50 && num < 100)",
    category: "find",
  },

  {
    question: "Find the index of the first even number in an array of numbers",
    data: [1, 3, 5, 7, 8, 10],
    expected_result: 4,
    solution: "data.findIndex(num => num % 2 === 0)",
    category: "findIndex",
  },
  {
    question:
      'Find the index of the first string that starts with "a" in an array of strings',
    data: ["banana", "apple", "cherry", "grape"],
    expected_result: 1,
    solution: 'data.findIndex(str => str.startsWith("a"))',
    category: "findIndex",
  },
  {
    question:
      "Find the index of the first number greater than 10 in an array of numbers",
    data: [5, 8, 12, 3, 9],
    expected_result: 2,
    solution: "data.findIndex(num => num > 10)",
    category: "findIndex",
  },
  {
    question:
      'Find the index of the first object in an array with a "completed" property set to true',
    data: [
      { task: "Do laundry", completed: false },
      { task: "Buy groceries", completed: true },
      { task: "Clean room", completed: false },
    ],
    expected_result: 1,
    solution: "data.findIndex(obj => obj.completed === true)",
    category: "findIndex",
  },
  {
    question: "Find the index of the first number divisible by both 2 and 3",
    data: [5, 6, 8, 12, 15],
    expected_result: 1,
    solution: "data.findIndex(num => num % 2 === 0 && num % 3 === 0)",
    category: "findIndex",
  },
  {
    question:
      "Find the index of the first person older than 30 from an array of people objects",
    data: [
      { name: "John", age: 28 },
      { name: "Jane", age: 35 },
      { name: "Bob", age: 40 },
    ],
    expected_result: 1,
    solution: "data.findIndex(person => person.age > 30)",
    category: "findIndex",
  },
  {
    question:
      "Find the index of the first element in an array that is a multiple of 7",
    data: [1, 2, 3, 14, 21],
    expected_result: 3,
    solution: "data.findIndex(num => num % 7 === 0)",
    category: "findIndex",
  },
  {
    question:
      "Find the index of the first string in an array with more than 6 characters",
    data: ["apple", "banana", "grape", "kiwi"],
    expected_result: 1,
    solution: "data.findIndex(str => str.length > 6)",
    category: "findIndex",
  },
  {
    question:
      'Find the index of the first object in an array where the "price" property is greater than 100',
    data: [
      { item: "apple", price: 50 },
      { item: "banana", price: 120 },
      { item: "cherry", price: 80 },
    ],
    expected_result: 1,
    solution: "data.findIndex(obj => obj.price > 100)",
    category: "findIndex",
  },
  {
    question:
      'Find the index of the first object in an array that has a "name" property with value "Jane"',
    data: [{ name: "John" }, { name: "Jane" }, { name: "Alice" }],
    expected_result: 1,
    solution: 'data.findIndex(obj => obj.name === "Jane")',
    category: "findIndex",
  },

  {
    question: "Convert an array of numbers to a string representation",
    data: [1, 2, 3, 4, 5],
    expected_result: "1,2,3,4,5",
    solution: "data.toString()",
    category: "toString",
  },
  {
    question: "Convert an array of strings to a string representation",
    data: ["apple", "banana", "cherry"],
    expected_result: "apple,banana,cherry",
    solution: "data.toString()",
    category: "toString",
  },
  {
    question: "Convert a number to its string representation",
    data: 12345,
    expected_result: "12345",
    solution: "data.toString()",
    category: "toString",
  },
  {
    question: "Convert a boolean value to a string representation",
    data: true,
    expected_result: "true",
    solution: "data.toString()",
    category: "toString",
  },
  {
    question: "Convert a date object to a string representation",
    data: new Date("2025-02-06"),
    expected_result:
      "Fri Feb 06 2025 00:00:00 GMT+0000 (Coordinated Universal Time)",
    solution: "data.toString()",
    category: "toString",
  },
  {
    question:
      "Convert an array of numbers and strings to a string representation",
    data: [1, "apple", 2, "banana"],
    expected_result: "1,apple,2,banana",
    solution: "data.toString()",
    category: "toString",
  },
  {
    question:
      "Convert a string with special characters to a string representation",
    data: "Hello, World!",
    expected_result: "Hello, World!",
    solution: "data.toString()",
    category: "toString",
  },
  {
    question: "Convert a number to a string with a specific radix",
    data: (255).toString(16),
    expected_result: "ff",
    solution: "data.toString(16)",
    category: "toString",
  },
  {
    question: "Convert an array of nested arrays to a string representation",
    data: [
      [1, 2],
      [3, 4],
    ],
    expected_result: "1,2,3,4",
    solution: "data.toString()",
    category: "toString",
  },
  {
    question:
      "Convert a number in scientific notation to a string representation",
    data: 1.23e5,
    expected_result: "123000",
    solution: "data.toString()",
    category: "toString",
  },

  {
    question:
      "Create a new array containing the first 3 elements from the original array",
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2, 3],
    solution: "data.slice(0, 3)",
    category: "slice",
  },
  {
    question:
      "Create a new array containing elements from index 2 to the end of the array",
    data: [10, 20, 30, 40, 50],
    expected_result: [30, 40, 50],
    solution: "data.slice(2)",
    category: "slice",
  },
  {
    question: "Create a new array with the last 2 elements of the array",
    data: [1, 2, 3, 4, 5],
    expected_result: [4, 5],
    solution: "data.slice(-2)",
    category: "slice",
  },
  {
    question: "Create a new array containing elements from index 1 to 4",
    data: ["apple", "banana", "cherry", "date", "elderberry"],
    expected_result: ["banana", "cherry", "date"],
    solution: "data.slice(1, 4)",
    category: "slice",
  },
  {
    question:
      "Create a new array containing the last 3 elements from the original array",
    data: [7, 8, 9, 10, 11],
    expected_result: [9, 10, 11],
    solution: "data.slice(-3)",
    category: "slice",
  },
  {
    question: "Create a new array with elements from index 2 to 5 (inclusive)",
    data: [100, 200, 300, 400, 500, 600],
    expected_result: [300, 400, 500],
    solution: "data.slice(2, 5)",
    category: "slice",
  },
  {
    question:
      "Create a new array from index 3 to the end, using negative indexing",
    data: [5, 10, 15, 20, 25, 30],
    expected_result: [20, 25, 30],
    solution: "data.slice(3)",
    category: "slice",
  },
  {
    question:
      "Create a new array containing the first 4 elements from the original array",
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2, 3, 4],
    solution: "data.slice(0, 4)",
    category: "slice",
  },
  {
    question: "Create a new array with the elements from index 1 to 3",
    data: ["apple", "banana", "cherry", "date", "elderberry"],
    expected_result: ["banana", "cherry", "date"],
    solution: "data.slice(1, 4)",
    category: "slice",
  },
  {
    question:
      "Create a new array containing only the last element of the array",
    data: ["a", "b", "c", "d", "e"],
    expected_result: ["e"],
    solution: "data.slice(-1)",
    category: "slice",
  },
  {
    question: "Create a new array containing elements from index 0 to index 2",
    data: [10, 20, 30, 40, 50],
    expected_result: [10, 20, 30],
    solution: "data.slice(0, 3)",
    category: "slice",
  },
  {
    question:
      "Create a new array containing elements from the 3rd index to the 6th index",
    data: [1, 2, 3, 4, 5, 6, 7, 8],
    expected_result: [4, 5, 6],
    solution: "data.slice(3, 6)",
    category: "slice",
  },
  {
    question: "Create a new array with the first 2 elements removed",
    data: ["apple", "banana", "cherry", "date"],
    expected_result: ["cherry", "date"],
    solution: "data.slice(2)",
    category: "slice",
  },
  {
    question:
      "Create a new array that contains the first 5 elements of a string",
    data: "hello world",
    expected_result: ["h", "e", "l", "l", "o"],
    solution: 'data.split("").slice(0, 5)',
    category: "slice",
  },
  {
    question: "Create a new array from index -3 to the end of the array",
    data: [1, 2, 3, 4, 5, 6],
    expected_result: [4, 5, 6],
    solution: "data.slice(-3)",
    category: "slice",
  },
  {
    question:
      "Create a new array that contains the elements from index -2 to the end",
    data: [11, 12, 13, 14, 15, 16],
    expected_result: [15, 16],
    solution: "data.slice(-2)",
    category: "slice",
  },
  {
    question:
      "Create a new array that contains all elements except the last one",
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2, 3, 4],
    solution: "data.slice(0, -1)",
    category: "slice",
  },
  {
    question:
      "Create a new array containing elements from index 4 to 6 (inclusive)",
    data: [2, 4, 6, 8, 10, 12],
    expected_result: [10, 12],
    solution: "data.slice(4, 6)",
    category: "slice",
  },
  {
    question:
      "Create a new array containing elements from index 0 to index 5, but skip index 2",
    data: [10, 20, 30, 40, 50],
    expected_result: [10, 20, 40, 50],
    solution: "data.slice(0, 2).concat(data.slice(3))",
    category: "slice",
  },
  {
    question:
      "Create a new array that skips the first element and includes all elements after it",
    data: ["a", "b", "c", "d"],
    expected_result: ["b", "c", "d"],
    solution: "data.slice(1)",
    category: "slice",
  },
  {
    question:
      "Create a new array that includes the last 4 elements of the array",
    data: [1, 2, 3, 4, 5, 6],
    expected_result: [3, 4, 5, 6],
    solution: "data.slice(-4)",
    category: "slice",
  },
  {
    question: "Create a new array containing the first 6 elements of a string",
    data: "abcdefgh",
    expected_result: ["a", "b", "c", "d", "e", "f"],
    solution: 'data.split("").slice(0, 6)',
    category: "slice",
  },
  {
    question:
      "Create a new array that includes the last 5 characters from a string",
    data: "Hello World!",
    expected_result: ["o", " ", "W", "o", "r"],
    solution: 'data.slice(-5).split("")',
    category: "slice",
  },
  {
    question: "Create a new array containing the middle 3 elements of an array",
    data: [1, 2, 3, 4, 5, 6, 7],
    expected_result: [3, 4, 5],
    solution: "data.slice(2, 5)",
    category: "slice",
  },
  {
    question:
      "Create a new array that includes the first and last elements of the original array",
    data: [10, 20, 30, 40, 50],
    expected_result: [10, 50],
    solution: "data.slice(0, 1).concat(data.slice(-1))",
    category: "slice",
  },

  {
    question: "Remove 2 elements starting from index 1 in the array",
    data: [10, 20, 30, 40, 50],
    expected_result: [20, 30],
    solution: "data.splice(1, 2)",
    category: "splice",
  },
  {
    question: "Remove the first element of the array",
    data: [1, 2, 3, 4, 5],
    expected_result: [1],
    solution: "data.splice(0, 1)",
    category: "splice",
  },
  {
    question: "Add 100 and 200 starting at index 2",
    data: [1, 2, 3, 4, 5],
    expected_result: [3, 4, 5],
    solution: "data.splice(2, 0, 100, 200)",
    category: "splice",
  },
  {
    question: 'Replace the element at index 1 with "banana"',
    data: ["apple", "orange", "grape"],
    expected_result: ["orange"],
    solution: 'data.splice(1, 1, "banana")',
    category: "splice",
  },
  {
    question: "Remove 3 elements starting from index 2",
    data: [10, 20, 30, 40, 50],
    expected_result: [30, 40, 50],
    solution: "data.splice(2, 3)",
    category: "splice",
  },
  {
    question: "Remove the last element from the array",
    data: [10, 20, 30, 40, 50],
    expected_result: [50],
    solution: "data.splice(-1, 1)",
    category: "splice",
  },
  {
    question: 'Add the element "apple" at the beginning of the array',
    data: ["banana", "cherry"],
    expected_result: ["banana", "cherry"],
    solution: 'data.splice(0, 0, "apple")',
    category: "splice",
  },
  {
    question: "Remove 4 elements starting from index 3",
    data: ["a", "b", "c", "d", "e", "f", "g"],
    expected_result: ["d", "e", "f", "g"],
    solution: "data.splice(3, 4)",
    category: "splice",
  },
  {
    question: 'Add "pear" and "peach" starting at index 1',
    data: ["apple", "banana", "cherry"],
    expected_result: ["banana", "cherry"],
    solution: 'data.splice(1, 0, "pear", "peach")',
    category: "splice",
  },
  {
    question:
      'Remove 2 elements from index 2 and replace them with "kiwi" and "mango"',
    data: ["apple", "orange", "banana", "grape"],
    expected_result: ["banana", "grape"],
    solution: 'data.splice(2, 2, "kiwi", "mango")',
    category: "splice",
  },
  {
    question: 'Add "blueberry" at index 0',
    data: ["apple", "banana"],
    expected_result: ["apple", "banana"],
    solution: 'data.splice(0, 0, "blueberry")',
    category: "splice",
  },
  {
    question: "Remove 1 element from the second-to-last index",
    data: [10, 20, 30, 40, 50],
    expected_result: [40],
    solution: "data.splice(-2, 1)",
    category: "splice",
  },
  {
    question: 'Add "watermelon" and "grape" at the end of the array',
    data: ["apple", "orange"],
    expected_result: ["apple", "orange"],
    solution: 'data.splice(data.length, 0, "watermelon", "grape")',
    category: "splice",
  },
  {
    question: 'Remove 3 elements from index 1 and add "peach" at the end',
    data: ["apple", "banana", "cherry", "date", "elderberry"],
    expected_result: ["banana", "cherry", "date"],
    solution: 'data.splice(1, 3, "peach")',
    category: "splice",
  },
  {
    question: "Remove the first 2 elements from the array",
    data: [1, 2, 3, 4, 5],
    expected_result: [1, 2],
    solution: "data.splice(0, 2)",
    category: "splice",
  },
  {
    question: "Remove elements from index 1 to the second-to-last index",
    data: [1, 2, 3, 4, 5],
    expected_result: [2, 3, 4],
    solution: "data.splice(1, 3)",
    category: "splice",
  },
  {
    question:
      'Remove 1 element from index 2 and replace it with "blue" and "green"',
    data: ["red", "yellow", "orange", "pink"],
    expected_result: ["orange"],
    solution: 'data.splice(2, 1, "blue", "green")',
    category: "splice",
  },
  {
    question:
      'Remove 2 elements from index 2 and replace them with "purple" and "violet"',
    data: ["red", "yellow", "green", "blue", "orange"],
    expected_result: ["green", "blue"],
    solution: 'data.splice(2, 2, "purple", "violet")',
    category: "splice",
  },
  {
    question: 'Add "orange" at index 2 in the array',
    data: ["apple", "banana", "cherry"],
    expected_result: ["apple", "banana", "cherry"],
    solution: 'data.splice(2, 0, "orange")',
    category: "splice",
  },
  {
    question: "Remove 4 elements starting from index 1 in the array",
    data: [1, 2, 3, 4, 5, 6, 7],
    expected_result: [2, 3, 4, 5],
    solution: "data.splice(1, 4)",
    category: "splice",
  },
  {
    question: 'Add "grape" and "kiwi" at index 3',
    data: ["apple", "banana", "cherry", "date"],
    expected_result: ["date"],
    solution: 'data.splice(3, 0, "grape", "kiwi")',
    category: "splice",
  },
  {
    question:
      'Remove the last element of the array and replace it with "peach"',
    data: ["apple", "banana", "cherry"],
    expected_result: ["cherry"],
    solution: 'data.splice(-1, 1, "peach")',
    category: "splice",
  },
  {
    question:
      'Remove 2 elements from index 1 and add "kiwi", "mango", and "papaya"',
    data: ["apple", "banana", "cherry", "date"],
    expected_result: ["banana", "cherry"],
    solution: 'data.splice(1, 2, "kiwi", "mango", "papaya")',
    category: "splice",
  },
  {
    question:
      'Remove elements from index 0 and replace them with "a", "b", and "c"',
    data: ["x", "y", "z"],
    expected_result: ["x", "y", "z"],
    solution: 'data.splice(0, 3, "a", "b", "c")',
    category: "splice",
  },
  {
    question:
      'Remove 2 elements from index 3 and replace them with "watermelon" and "melon"',
    data: [10, 20, 30, 40, 50],
    expected_result: [40, 50],
    solution: 'data.splice(3, 2, "watermelon", "melon")',
    category: "splice",
  },

  {
    question: "Check if the variable is an array",
    data: [1, 2, 3, 4],
    expected_result: true,
    solution: "Array.isArray(data)",
    category: "isArray",
  },
  {
    question: "Check if the variable is an array of strings",
    data: ["apple", "banana", "cherry"],
    expected_result: true,
    solution: "Array.isArray(data)",
    category: "isArray",
  },
  {
    question: "Check if a string is an array",
    data: "Hello, world!",
    expected_result: false,
    solution: "Array.isArray(data)",
    category: "isArray",
  },
  {
    question: "Check if an object is an array",
    data: { name: "John", age: 30 },
    expected_result: false,
    solution: "Array.isArray(data)",
    category: "isArray",
  },
  {
    question: "Check if an array with mixed data types is an array",
    data: [1, "apple", true, null],
    expected_result: true,
    solution: "Array.isArray(data)",
    category: "isArray",
  },
  {
    question: "Check if a number is an array",
    data: 12345,
    expected_result: false,
    solution: "Array.isArray(data)",
    category: "isArray",
  },
  {
    question: "Check if an empty array is an array",
    data: [],
    expected_result: true,
    solution: "Array.isArray(data)",
    category: "isArray",
  },
  {
    question: "Check if a function is an array",
    data: function () {
      return "hello";
    },
    expected_result: false,
    solution: "Array.isArray(data)",
    category: "isArray",
  },
  {
    question: "Check if an array of numbers is an array",
    data: [1, 2, 3, 4, 5],
    expected_result: true,
    solution: "Array.isArray(data)",
    category: "isArray",
  },
  {
    question: "Check if a boolean is an array",
    data: true,
    expected_result: false,
    solution: "Array.isArray(data)",
    category: "isArray",
  },

  {
    question: "Convert a string into an array of characters",
    data: "hello",
    expected_result: ["h", "e", "l", "l", "o"],
    solution: "Array.from(data)",
    category: "Array.from",
  },
  {
    question: "Convert a Set into an array",
    data: new Set([1, 2, 3, 4, 5]),
    expected_result: [1, 2, 3, 4, 5],
    solution: "Array.from(data)",
    category: "Array.from",
  },
  {
    question: "Convert a Map’s values into an array",
    data: new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]),
    expected_result: [1, 2, 3],
    solution: "Array.from(data.values())",
    category: "Array.from",
  },
  {
    question: "Create an array from an object with iterable properties",
    data: { length: 5 },
    expected_result: [undefined, undefined, undefined, undefined, undefined],
    solution: "Array.from({ length: 5 })",
    category: "Array.from",
  },
  {
    question:
      "Create an array from a string and apply a transformation (uppercase each character)",
    data: "hello",
    expected_result: ["H", "E", "L", "L", "O"],
    solution: "Array.from(data, char => char.toUpperCase())",
    category: "Array.from",
  },
  {
    question: "Convert an array-like object (arguments) into an array",
    data: function () {
      return Array.from(arguments);
    },
    expected_result: [1, 2, 3, 4],
    solution: "data(1, 2, 3, 4)",
    category: "Array.from",
  },
  {
    question:
      "Create an array from a Set and remove duplicates from a string array",
    data: new Set(["apple", "banana", "apple", "orange"]),
    expected_result: ["apple", "banana", "orange"],
    solution: "Array.from(data)",
    category: "Array.from",
  },
  {
    question:
      "Create an array of squares from a range of numbers using Array.from",
    data: 5,
    expected_result: [0, 1, 4, 9, 16],
    solution: "Array.from({ length: 5 }, (v, i) => i * i)",
    category: "Array.from",
  },
  {
    question: "Convert a NodeList into an array",
    data: document.querySelectorAll("div"),
    expected_result: Array.from(data).length,
    solution: "Array.from(data)",
    category: "Array.from",
  },
  {
    question: "Convert a Set of strings into an array of uppercase strings",
    data: new Set(["dog", "cat", "bird"]),
    expected_result: ["DOG", "CAT", "BIRD"],
    solution: "Array.from(data, str => str.toUpperCase())",
    category: "Array.from",
  },

  {
    question: 'Find the length of the string "Hello, World!"',
    data: "Hello, World!",
    expected_result: 13,
    solution: "data.length",
    category: "length",
  },
  {
    question: 'Find the length of the string "JavaScript"',
    data: "JavaScript",
    expected_result: 10,
    solution: "data.length",
    category: "length",
  },
  {
    question: "Check the length of an empty string",
    data: "",
    expected_result: 0,
    solution: "data.length",
    category: "length",
  },
  {
    question: 'Check the length of the string "1234567890"',
    data: "1234567890",
    expected_result: 10,
    solution: "data.length",
    category: "length",
  },
  {
    question: 'Find the length of the string "   " (three spaces)',
    data: "   ",
    expected_result: 3,
    solution: "data.length",
    category: "length",
  },
  {
    question: 'Find the length of the string "I love JavaScript!"',
    data: "I love JavaScript!",
    expected_result: 19,
    solution: "data.length",
    category: "length",
  },
  {
    question: 'Check the length of the string "abcdef" and compare it with 6',
    data: "abcdef",
    expected_result: true,
    solution: "data.length === 6",
    category: "length",
  },
  {
    question:
      'Check the length of a string containing special characters "@#&*"',
    data: "@#&*",
    expected_result: 4,
    solution: "data.length",
    category: "length",
  },
  {
    question: 'Find the length of the string "apple pie"',
    data: "apple pie",
    expected_result: 10,
    solution: "data.length",
    category: "length",
  },
  {
    question: 'Check if the string "Hello" has a length greater than 5',
    data: "Hello",
    expected_result: false,
    solution: "data.length > 5",
    category: "length",
  },

  {
    question: 'Get the character at index 0 of the string "Hello"',
    data: "Hello",
    expected_result: "H",
    solution: "data.charAt(0)",
    category: "charAt",
  },
  {
    question: 'Get the character at index 4 of the string "JavaScript"',
    data: "JavaScript",
    expected_result: "S",
    solution: "data.charAt(4)",
    category: "charAt",
  },
  {
    question: 'Get the character at index 2 of the string "abcdef"',
    data: "abcdef",
    expected_result: "c",
    solution: "data.charAt(2)",
    category: "charAt",
  },
  {
    question: 'Get the character at index 0 of the string "123456789"',
    data: "123456789",
    expected_result: "1",
    solution: "data.charAt(0)",
    category: "charAt",
  },
  {
    question: 'Get the character at index 5 of the string "Hello, World!"',
    data: "Hello, World!",
    expected_result: ",",
    solution: "data.charAt(5)",
    category: "charAt",
  },
  {
    question: 'Get the character at index 10 of the string "abcdef"',
    data: "abcdef",
    expected_result: "",
    solution: "data.charAt(10)",
    category: "charAt",
  },
  {
    question: 'Get the character at index 3 of the string "apple pie"',
    data: "apple pie",
    expected_result: "l",
    solution: "data.charAt(3)",
    category: "charAt",
  },
  {
    question: 'Get the character at index 6 of the string "I love JavaScript"',
    data: "I love JavaScript",
    expected_result: "J",
    solution: "data.charAt(6)",
    category: "charAt",
  },
  {
    question: 'Get the character at index 1 of the string "world"',
    data: "world",
    expected_result: "o",
    solution: "data.charAt(1)",
    category: "charAt",
  },
  {
    question:
      'Get the character at index 8 of the string "Learning JavaScript"',
    data: "Learning JavaScript",
    expected_result: "J",
    solution: "data.charAt(8)",
    category: "charAt",
  },

  {
    question:
      'Find the index of the first occurrence of "o" in the string "Hello"',
    data: "Hello",
    expected_result: 4,
    solution: 'data.indexOf("o")',
    category: "indexOf",
  },
  {
    question:
      'Find the index of the first occurrence of "a" in the string "JavaScript"',
    data: "JavaScript",
    expected_result: 1,
    solution: 'data.indexOf("a")',
    category: "indexOf",
  },
  {
    question:
      'Find the index of the first occurrence of "r" in the string "abcdef"',
    data: "abcdef",
    expected_result: -1,
    solution: 'data.indexOf("r")',
    category: "indexOf",
  },
  {
    question:
      'Find the index of the first occurrence of "o" in the string "Hello, World!"',
    data: "Hello, World!",
    expected_result: 4,
    solution: 'data.indexOf("o")',
    category: "indexOf",
  },
  {
    question:
      'Find the index of the first occurrence of "e" in the string "JavaScript"',
    data: "JavaScript",
    expected_result: 1,
    solution: 'data.indexOf("e")',
    category: "indexOf",
  },
  {
    question:
      'Find the index of the first occurrence of "y" in the string "hey"',
    data: "hey",
    expected_result: 1,
    solution: 'data.indexOf("y")',
    category: "indexOf",
  },
  {
    question:
      'Find the index of the first occurrence of "w" in the string "wonderful"',
    data: "wonderful",
    expected_result: 0,
    solution: 'data.indexOf("w")',
    category: "indexOf",
  },
  {
    question:
      'Find the index of the first occurrence of "i" in the string "business"',
    data: "business",
    expected_result: 2,
    solution: 'data.indexOf("i")',
    category: "indexOf",
  },
  {
    question:
      'Find the index of the first occurrence of "o" in the string "goodbye"',
    data: "goodbye",
    expected_result: 1,
    solution: 'data.indexOf("o")',
    category: "indexOf",
  },
  {
    question:
      'Find the index of the first occurrence of "z" in the string "hello"',
    data: "hello",
    expected_result: -1,
    solution: 'data.indexOf("z")',
    category: "indexOf",
  },

  {
    question: 'Convert the string "HELLO" to lowercase',
    data: "HELLO",
    expected_result: "hello",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },
  {
    question: 'Convert the string "JavaScript" to lowercase',
    data: "JavaScript",
    expected_result: "javascript",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },
  {
    question: 'Convert the string "HELLO WORLD" to lowercase',
    data: "HELLO WORLD",
    expected_result: "hello world",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },
  {
    question: 'Convert the string "Code" to lowercase',
    data: "Code",
    expected_result: "code",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },
  {
    question: 'Convert the string "gReaT" to lowercase',
    data: "gReaT",
    expected_result: "great",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },
  {
    question: 'Convert the string "TEXTPROCESSING" to lowercase',
    data: "TEXTPROCESSING",
    expected_result: "textprocessing",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },
  {
    question: 'Convert the string "123ABC" to lowercase',
    data: "123ABC",
    expected_result: "123abc",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },
  {
    question: 'Convert the string "Java IS Fun" to lowercase',
    data: "Java IS Fun",
    expected_result: "java is fun",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },
  {
    question: 'Convert the string "UPPERCASE" to lowercase',
    data: "UPPERCASE",
    expected_result: "uppercase",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },
  {
    question: 'Convert the string "TeStInG" to lowercase',
    data: "TeStInG",
    expected_result: "testing",
    solution: "data.toLowerCase()",
    category: "toLowerCase",
  },

  {
    question: 'Convert the string "hello" to uppercase',
    data: "hello",
    expected_result: "HELLO",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },
  {
    question: 'Convert the string "javaScript" to uppercase',
    data: "javaScript",
    expected_result: "JAVASCRIPT",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },
  {
    question: 'Convert the string "hello world" to uppercase',
    data: "hello world",
    expected_result: "HELLO WORLD",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },
  {
    question: 'Convert the string "code" to uppercase',
    data: "code",
    expected_result: "CODE",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },
  {
    question: 'Convert the string "great" to uppercase',
    data: "great",
    expected_result: "GREAT",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },
  {
    question: 'Convert the string "textprocessing" to uppercase',
    data: "textprocessing",
    expected_result: "TEXTPROCESSING",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },
  {
    question: 'Convert the string "123abc" to uppercase',
    data: "123abc",
    expected_result: "123ABC",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },
  {
    question: 'Convert the string "java is fun" to uppercase',
    data: "java is fun",
    expected_result: "JAVA IS FUN",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },
  {
    question: 'Convert the string "uppercase" to uppercase',
    data: "uppercase",
    expected_result: "UPPERCASE",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },
  {
    question: 'Convert the string "testing" to uppercase',
    data: "testing",
    expected_result: "TESTING",
    solution: "data.toUpperCase()",
    category: "toUpperCase",
  },

  {
    question: 'Extract the first 3 characters from the string "Hello"',
    data: "Hello",
    expected_result: "Hel",
    solution: "data.slice(0, 3)",
    category: "slice",
  },
  {
    question: 'Extract the last 2 characters from the string "JavaScript"',
    data: "JavaScript",
    expected_result: "pt",
    solution: "data.slice(-2)",
    category: "slice",
  },
  {
    question:
      'Extract characters from index 4 to index 9 in the string "JavaScript"',
    data: "JavaScript",
    expected_result: "Script",
    solution: "data.slice(4, 10)",
    category: "slice",
  },
  {
    question:
      'Extract characters from index 3 to the end of the string "hello world"',
    data: "hello world",
    expected_result: "lo world",
    solution: "data.slice(3)",
    category: "slice",
  },
  {
    question: 'Extract the first 4 characters from the string "abcdef"',
    data: "abcdef",
    expected_result: "abcd",
    solution: "data.slice(0, 4)",
    category: "slice",
  },
  {
    question:
      'Extract the characters from index 2 to the end of the string "JavaScript"',
    data: "JavaScript",
    expected_result: "vascript",
    solution: "data.slice(2)",
    category: "slice",
  },
  {
    question:
      'Extract the characters from index 2 to index 6 in the string "Programming"',
    data: "Programming",
    expected_result: "ogra",
    solution: "data.slice(2, 6)",
    category: "slice",
  },
  {
    question:
      'Extract the characters from index 4 to index 7 in the string "Technology"',
    data: "Technology",
    expected_result: "nolo",
    solution: "data.slice(4, 8)",
    category: "slice",
  },
  {
    question: 'Extract the last 3 characters from the string "123456"',
    data: "123456",
    expected_result: "456",
    solution: "data.slice(-3)",
    category: "slice",
  },
  {
    question:
      'Extract the characters from index 0 to index 5 in the string "abcdef"',
    data: "abcdef",
    expected_result: "abcde",
    solution: "data.slice(0, 5)",
    category: "slice",
  },
  {
    question:
      'Extract the characters from index 5 to index 10 in the string "supercalifragilisticexpialidocious"',
    data: "supercalifragilisticexpialidocious",
    expected_result: "fragil",
    solution: "data.slice(5, 10)",
    category: "slice",
  },
  {
    question:
      'Extract the characters from index -5 to the end of the string "Hello, World!"',
    data: "Hello, World!",
    expected_result: "orld!",
    solution: "data.slice(-5)",
    category: "slice",
  },
  {
    question:
      'Extract characters from index 7 to index 12 in the string "programming"',
    data: "programming",
    expected_result: "mming",
    solution: "data.slice(7, 12)",
    category: "slice",
  },
  {
    question:
      'Extract characters from index 4 to index 9 in the string "wonderful"',
    data: "wonderful",
    expected_result: "erful",
    solution: "data.slice(4, 9)",
    category: "slice",
  },
  {
    question: 'Extract the first 5 characters from the string "environment"',
    data: "environment",
    expected_result: "envir",
    solution: "data.slice(0, 5)",
    category: "slice",
  },
  {
    question: 'Extract the last 4 characters from the string "incredible"',
    data: "incredible",
    expected_result: "ible",
    solution: "data.slice(-4)",
    category: "slice",
  },
  {
    question:
      'Extract the characters from index 2 to the end of the string "development"',
    data: "development",
    expected_result: "velopment",
    solution: "data.slice(2)",
    category: "slice",
  },
  {
    question: 'Extract the first 3 characters from the string "discover"',
    data: "discover",
    expected_result: "dis",
    solution: "data.slice(0, 3)",
    category: "slice",
  },
  {
    question:
      'Extract characters from index 3 to index 8 in the string "inspiration"',
    data: "inspiration",
    expected_result: "spira",
    solution: "data.slice(3, 8)",
    category: "slice",
  },
  {
    question:
      'Extract characters from index 1 to index 6 in the string "explanation"',
    data: "explanation",
    expected_result: "xplan",
    solution: "data.slice(1, 6)",
    category: "slice",
  },
  {
    question:
      'Extract the characters from index -8 to the end of the string "imagination"',
    data: "imagination",
    expected_result: "gination",
    solution: "data.slice(-8)",
    category: "slice",
  },

  {
    question:
      'Extract the substring from index 0 to index 3 of the string "Hello"',
    data: "Hello",
    expected_result: "Hell",
    solution: "data.substring(0, 4)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 2 to index 5 of the string "JavaScript"',
    data: "JavaScript",
    expected_result: "va",
    solution: "data.substring(2, 5)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 3 to the end of the string "abcdef"',
    data: "abcdef",
    expected_result: "def",
    solution: "data.substring(3)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 4 to index 7 of the string "supercalifragilisticexpialidocious"',
    data: "supercalifragilisticexpialidocious",
    expected_result: "cali",
    solution: "data.substring(4, 8)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 1 to index 6 of the string "wonderful"',
    data: "wonderful",
    expected_result: "onder",
    solution: "data.substring(1, 6)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 5 to index 10 of the string "JavaScript"',
    data: "JavaScript",
    expected_result: "Scrip",
    solution: "data.substring(5, 10)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 0 to index 3 of the string "Programming"',
    data: "Programming",
    expected_result: "Prog",
    solution: "data.substring(0, 4)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 3 to index 7 of the string "incredible"',
    data: "incredible",
    expected_result: "cred",
    solution: "data.substring(3, 7)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 2 to index 5 of the string "development"',
    data: "development",
    expected_result: "velo",
    solution: "data.substring(2, 6)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 1 to index 4 of the string "environment"',
    data: "environment",
    expected_result: "nvi",
    solution: "data.substring(1, 4)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 4 to the end of the string "unbelievable"',
    data: "unbelievable",
    expected_result: "lievable",
    solution: "data.substring(4)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 3 to index 9 of the string "exceptional"',
    data: "exceptional",
    expected_result: "eptio",
    solution: "data.substring(3, 9)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 2 to index 7 of the string "fantastic"',
    data: "fantastic",
    expected_result: "ntas",
    solution: "data.substring(2, 7)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 0 to index 5 of the string "imagination"',
    data: "imagination",
    expected_result: "imagi",
    solution: "data.substring(0, 5)",
    category: "substring",
  },
  {
    question:
      'Extract the substring from index 6 to index 12 of the string "explanation"',
    data: "explanation",
    expected_result: "natio",
    solution: "data.substring(6, 12)",
    category: "substring",
  },
  {
    question:
      'Extract the substring starting from index 0 with a length of 3 from the string "Hello"',
    data: "Hello",
    expected_result: "Hel",
    solution: "data.substr(0, 3)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 2 with a length of 4 from the string "JavaScript"',
    data: "JavaScript",
    expected_result: "vaSc",
    solution: "data.substr(2, 4)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 4 with a length of 3 from the string "abcdef"',
    data: "abcdef",
    expected_result: "def",
    solution: "data.substr(4, 3)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 5 with a length of 4 from the string "supercalifragilisticexpialidocious"',
    data: "supercalifragilisticexpialidocious",
    expected_result: "cali",
    solution: "data.substr(5, 4)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 2 with a length of 3 from the string "wonderful"',
    data: "wonderful",
    expected_result: "nde",
    solution: "data.substr(2, 3)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 0 with a length of 4 from the string "JavaScript"',
    data: "JavaScript",
    expected_result: "Java",
    solution: "data.substr(0, 4)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 3 with a length of 5 from the string "incredible"',
    data: "incredible",
    expected_result: "cred",
    solution: "data.substr(3, 5)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 2 with a length of 4 from the string "development"',
    data: "development",
    expected_result: "velo",
    solution: "data.substr(2, 4)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 1 with a length of 5 from the string "environment"',
    data: "environment",
    expected_result: "nvir",
    solution: "data.substr(1, 5)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 4 with a length of 7 from the string "unbelievable"',
    data: "unbelievable",
    expected_result: "lievabl",
    solution: "data.substr(4, 7)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 3 with a length of 6 from the string "exceptional"',
    data: "exceptional",
    expected_result: "eptio",
    solution: "data.substr(3, 6)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 2 with a length of 5 from the string "fantastic"',
    data: "fantastic",
    expected_result: "ntas",
    solution: "data.substr(2, 5)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 0 with a length of 6 from the string "imagination"',
    data: "imagination",
    expected_result: "imagin",
    solution: "data.substr(0, 6)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index 6 with a length of 4 from the string "explanation"',
    data: "explanation",
    expected_result: "nati",
    solution: "data.substr(6, 4)",
    category: "substr",
  },
  {
    question:
      'Extract the substring starting from index -4 with a length of 3 from the string "superstar"',
    data: "superstar",
    expected_result: "tar",
    solution: "data.substr(-4, 3)",
    category: "substr",
  },

  {
    question: 'Concatenate the string "Hello" with " World!"',
    data: "Hello",
    expected_result: "Hello World!",
    solution: 'data.concat(" World!")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Java" with "Script"',
    data: "Java",
    expected_result: "JavaScript",
    solution: 'data.concat("Script")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Good" with " Morning"',
    data: "Good",
    expected_result: "Good Morning",
    solution: 'data.concat(" Morning")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Hi" with " there"',
    data: "Hi",
    expected_result: "Hi there",
    solution: 'data.concat(" there")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Java" with " is fun"',
    data: "Java",
    expected_result: "Java is fun",
    solution: 'data.concat(" is fun")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "I" with " am" and " learning"',
    data: "I",
    expected_result: "I am learning",
    solution: 'data.concat(" am", " learning")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Have" with " a great day"',
    data: "Have",
    expected_result: "Have a great day",
    solution: 'data.concat(" a great day")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Learn" with " coding"',
    data: "Learn",
    expected_result: "Learn coding",
    solution: 'data.concat(" coding")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "C" with "ode"',
    data: "C",
    expected_result: "Code",
    solution: 'data.concat("ode")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Python" with " Rocks"',
    data: "Python",
    expected_result: "Python Rocks",
    solution: 'data.concat(" Rocks")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "I" with " love JavaScript"',
    data: "I",
    expected_result: "I love JavaScript",
    solution: 'data.concat(" love JavaScript")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Concatenation" with " is easy!"',
    data: "Concatenation",
    expected_result: "Concatenation is easy!",
    solution: 'data.concat(" is easy!")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "First" with " Second" and " part"',
    data: "First",
    expected_result: "First Second part",
    solution: 'data.concat(" Second", " part")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "String" with " concatenation"',
    data: "String",
    expected_result: "String concatenation",
    solution: 'data.concat(" concatenation")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Concatenate" with " with" and " space"',
    data: "Concatenate",
    expected_result: "Concatenate with space",
    solution: 'data.concat(" with", " space")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Morning" with " everyone"',
    data: "Morning",
    expected_result: "Morning everyone",
    solution: 'data.concat(" everyone")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "I" with " am" and " here"',
    data: "I",
    expected_result: "I am here",
    solution: 'data.concat(" am", " here")',
    category: "concat",
  },
  {
    question: 'Concatenate the string "Let" with " us" and " begin"',
    data: "Let",
    expected_result: "Let us begin",
    solution: 'data.concat(" us", " begin")',
    category: "concat",
  },

  {
    question: 'Split the string "apple,banana,orange" by commas.',
    data: "apple,banana,orange",
    expected_result: ["apple", "banana", "orange"],
    solution: 'data.split(",")',
    category: "split",
  },
  {
    question: 'Split the string "Hello World" by a space.',
    data: "Hello World",
    expected_result: ["Hello", "World"],
    solution: 'data.split(" ")',
    category: "split",
  },
  {
    question: 'Split the string "123-456-789" by dashes.',
    data: "123-456-789",
    expected_result: ["123", "456", "789"],
    solution: 'data.split("-")',
    category: "split",
  },
  {
    question: 'Split the string "one two three four" by spaces.',
    data: "one two three four",
    expected_result: ["one", "two", "three", "four"],
    solution: 'data.split(" ")',
    category: "split",
  },
  {
    question: 'Split the string "a,b,c,d,e" by commas.',
    data: "a,b,c,d,e",
    expected_result: ["a", "b", "c", "d", "e"],
    solution: 'data.split(",")',
    category: "split",
  },
  {
    question: 'Split the string "this is a test" by spaces.',
    data: "this is a test",
    expected_result: ["this", "is", "a", "test"],
    solution: 'data.split(" ")',
    category: "split",
  },
  {
    question: 'Split the string "apple/banana/orange" by slashes.',
    data: "apple/banana/orange",
    expected_result: ["apple", "banana", "orange"],
    solution: 'data.split("/")',
    category: "split",
  },
  {
    question: 'Split the string "2025-02-06" by dashes.',
    data: "2025-02-06",
    expected_result: ["2025", "02", "06"],
    solution: 'data.split("-")',
    category: "split",
  },
  {
    question: 'Split the string "cat|dog|rabbit" by pipe characters.',
    data: "cat|dog|rabbit",
    expected_result: ["cat", "dog", "rabbit"],
    solution: 'data.split("|")',
    category: "split",
  },
  {
    question: 'Split the string "apple,banana,grape,pear" by commas.',
    data: "apple,banana,grape,pear",
    expected_result: ["apple", "banana", "grape", "pear"],
    solution: 'data.split(",")',
    category: "split",
  },
  {
    question:
      'Split the string "one two three" by spaces and limit to 2 parts.',
    data: "one two three",
    expected_result: ["one", "two three"],
    solution: 'data.split(" ", 2)',
    category: "split",
  },
  {
    question:
      'Split the string "hello,world,how,are,you" by commas and limit to 3 parts.',
    data: "hello,world,how,are,you",
    expected_result: ["hello", "world", "how,are,you"],
    solution: 'data.split(",", 3)',
    category: "split",
  },
  {
    question: 'Split the string "apple@orange@banana" by the @ symbol.',
    data: "apple@orange@banana",
    expected_result: ["apple", "orange", "banana"],
    solution: 'data.split("@")',
    category: "split",
  },
  {
    question: 'Split the string "one-two-three-four" by dashes.',
    data: "one-two-three-four",
    expected_result: ["one", "two", "three", "four"],
    solution: 'data.split("-")',
    category: "split",
  },
  {
    question: 'Split the string "this is, an example" by spaces and comma.',
    data: "this is, an example",
    expected_result: ["this", "is", ", an", "example"],
    solution: "data.split(/[s,]+/)",
    category: "split",
  },

  {
    question: 'Check if the string "Hello, World!" contains the word "Hello".',
    data: "Hello, World!",
    expected_result: true,
    solution: 'data.includes("Hello")',
    category: "includes",
  },
  {
    question:
      'Check if the string "JavaScript is awesome" contains the word "awesome".',
    data: "JavaScript is awesome",
    expected_result: true,
    solution: 'data.includes("awesome")',
    category: "includes",
  },
  {
    question: 'Check if the string "I love coding" contains the word "love".',
    data: "I love coding",
    expected_result: true,
    solution: 'data.includes("love")',
    category: "includes",
  },
  {
    question:
      'Check if the string "apple, orange, banana" contains the word "orange".',
    data: "apple, orange, banana",
    expected_result: true,
    solution: 'data.includes("orange")',
    category: "includes",
  },
  {
    question:
      'Check if the string "I am learning JavaScript" contains the word "Python".',
    data: "I am learning JavaScript",
    expected_result: false,
    solution: 'data.includes("Python")',
    category: "includes",
  },
  {
    question:
      'Check if the string "Good morning, everyone!" contains the word "everyone".',
    data: "Good morning, everyone!",
    expected_result: true,
    solution: 'data.includes("everyone")',
    category: "includes",
  },
  {
    question:
      'Check if the string "The quick brown fox" contains the word "fox".',
    data: "The quick brown fox",
    expected_result: true,
    solution: 'data.includes("fox")',
    category: "includes",
  },
  {
    question:
      'Check if the string "Learn JavaScript and Python" contains the word "Ruby".',
    data: "Learn JavaScript and Python",
    expected_result: false,
    solution: 'data.includes("Ruby")',
    category: "includes",
  },
  {
    question: 'Check if the string "abc123" contains the substring "123".',
    data: "abc123",
    expected_result: true,
    solution: 'data.includes("123")',
    category: "includes",
  },
  {
    question:
      'Check if the string "Hello, how are you?" contains the word "how".',
    data: "Hello, how are you?",
    expected_result: true,
    solution: 'data.includes("how")',
    category: "includes",
  },

  {
    question:
      'Replace the first occurrence of "apple" with "orange" in the string "apple, banana, apple".',
    data: "apple, banana, apple",
    expected_result: "orange, banana, apple",
    solution: 'data.replace("apple", "orange")',
    category: "replace",
  },
  {
    question:
      'Replace "JavaScript" with "TypeScript" in the string "I love JavaScript!".',
    data: "I love JavaScript!",
    expected_result: "I love TypeScript!",
    solution: 'data.replace("JavaScript", "TypeScript")',
    category: "replace",
  },
  {
    question: 'Replace "dog" with "cat" in the string "I have a dog.".',
    data: "I have a dog.",
    expected_result: "I have a cat.",
    solution: 'data.replace("dog", "cat")',
    category: "replace",
  },
  {
    question:
      'Replace "apple" with "banana" in the string "apple pie, apple tart".',
    data: "apple pie, apple tart",
    expected_result: "banana pie, apple tart",
    solution: 'data.replace("apple", "banana")',
    category: "replace",
  },
  {
    question:
      'Replace the first occurrence of "is" with "was" in the string "This is a test."',
    data: "This is a test.",
    expected_result: "This was a test.",
    solution: 'data.replace("is", "was")',
    category: "replace",
  },
  {
    question: 'Replace "red" with "blue" in the string "red car, red house".',
    data: "red car, red house",
    expected_result: "blue car, red house",
    solution: 'data.replace("red", "blue")',
    category: "replace",
  },
  {
    question:
      'Replace "dog" with "cat" globally in the string "dog, dog, dog".',
    data: "dog, dog, dog",
    expected_result: "cat, cat, cat",
    solution: 'data.replace(/dog/g, "cat")',
    category: "replace",
  },
  {
    question: 'Replace "cat" with "lion" in the string "cat and dog".',
    data: "cat and dog",
    expected_result: "lion and dog",
    solution: 'data.replace("cat", "lion")',
    category: "replace",
  },
  {
    question:
      'Replace the first occurrence of "hello" with "hi" in the string "hello world, hello universe".',
    data: "hello world, hello universe",
    expected_result: "hi world, hello universe",
    solution: 'data.replace("hello", "hi")',
    category: "replace",
  },
  {
    question:
      'Replace "good" with "great" in the string "Good morning, good night".',
    data: "Good morning, good night",
    expected_result: "Great morning, good night",
    solution: 'data.replace("good", "great")',
    category: "replace",
  },
  {
    question: 'Replace "hello" with "hi" in the string "hello there! hello!".',
    data: "hello there! hello!",
    expected_result: "hi there! hello!",
    solution: 'data.replace("hello", "hi")',
    category: "replace",
  },
  {
    question:
      'Replace all digits with "#" in the string "My number is 123456789".',
    data: "My number is 123456789",
    expected_result: "My number is #########",
    solution: 'data.replace(/d/g, "#")',
    category: "replace",
  },
  {
    question: 'Replace "sun" with "moon" in the string "The sun is shining".',
    data: "The sun is shining",
    expected_result: "The moon is shining",
    solution: 'data.replace("sun", "moon")',
    category: "replace",
  },
  {
    question:
      'Replace the first occurrence of "test" with "exam" in the string "This is a test, test, test".',
    data: "This is a test, test, test",
    expected_result: "This is a exam, test, test",
    solution: 'data.replace("test", "exam")',
    category: "replace",
  },
  {
    question:
      'Replace all occurrences of "yes" with "no" in the string "yes yes yes".',
    data: "yes yes yes",
    expected_result: "no no no",
    solution: 'data.replace(/yes/g, "no")',
    category: "replace",
  },

  {
    question:
      'Replace all occurrences of "cat" with "dog" in the string "cat, cat, cat".',
    data: "cat, cat, cat",
    expected_result: "dog, dog, dog",
    solution: 'data.replaceAll("cat", "dog")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all occurrences of "apple" with "orange" in the string "apple, apple, apple".',
    data: "apple, apple, apple",
    expected_result: "orange, orange, orange",
    solution: 'data.replaceAll("apple", "orange")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all occurrences of "hello" with "hi" in the string "hello world, hello everyone".',
    data: "hello world, hello everyone",
    expected_result: "hi world, hi everyone",
    solution: 'data.replaceAll("hello", "hi")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all occurrences of "red" with "blue" in the string "red, red, red".',
    data: "red, red, red",
    expected_result: "blue, blue, blue",
    solution: 'data.replaceAll("red", "blue")',
    category: "replaceAll",
  },
  {
    question: 'Replace all spaces with hyphens in the string "hello world".',
    data: "hello world",
    expected_result: "hello-world",
    solution: 'data.replaceAll(" ", "-")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all occurrences of "test" with "exam" in the string "test test test".',
    data: "test test test",
    expected_result: "exam exam exam",
    solution: 'data.replaceAll("test", "exam")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all occurrences of digits with "*" in the string "123-456-789".',
    data: "123-456-789",
    expected_result: "***-***-***",
    solution: 'data.replaceAll(/d/g, "*")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all occurrences of "dog" with "cat" in the string "dog, dog, dog".',
    data: "dog, dog, dog",
    expected_result: "cat, cat, cat",
    solution: 'data.replaceAll("dog", "cat")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all commas with semicolons in the string "apple, banana, cherry".',
    data: "apple, banana, cherry",
    expected_result: "apple; banana; cherry",
    solution: 'data.replaceAll(",", ";")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all lowercase letters with uppercase letters in the string "hello world".',
    data: "hello world",
    expected_result: "HELLO WORLD",
    solution: "data.replaceAll(/[a-z]/g, letter => letter.toUpperCase())",
    category: "replaceAll",
  },
  {
    question:
      'Replace all occurrences of "sun" with "moon" in the string "The sun is shining, the sun is bright".',
    data: "The sun is shining, the sun is bright",
    expected_result: "The moon is shining, the moon is bright",
    solution: 'data.replaceAll("sun", "moon")',
    category: "replaceAll",
  },
  {
    question: 'Replace all occurrences of "a" with "o" in the string "apple".',
    data: "apple",
    expected_result: "opple",
    solution: 'data.replaceAll("a", "o")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all occurrences of "I" with "You" in the string "I am I".',
    data: "I am I",
    expected_result: "You am You",
    solution: 'data.replaceAll("I", "You")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all periods with exclamation marks in the string "Hello. How are you.".',
    data: "Hello. How are you.",
    expected_result: "Hello! How are you!",
    solution: 'data.replaceAll(".", "!")',
    category: "replaceAll",
  },
  {
    question:
      'Replace all occurrences of "quick" with "slow" in the string "The quick brown fox".',
    data: "The quick brown fox",
    expected_result: "The slow brown fox",
    solution: 'data.replaceAll("quick", "slow")',
    category: "replaceAll",
  },

  {
    question:
      'Remove leading and trailing spaces from the string "   Hello World   ".',
    data: "   Hello World   ",
    expected_result: "Hello World",
    solution: "data.trim()",
    category: "trim",
  },
  {
    question:
      'Remove leading and trailing spaces from the string "   JavaScript   ".',
    data: "   JavaScript   ",
    expected_result: "JavaScript",
    solution: "data.trim()",
    category: "trim",
  },
  {
    question: 'Remove spaces from the string "    abc    ".',
    data: "    abc    ",
    expected_result: "abc",
    solution: "data.trim()",
    category: "trim",
  },
  {
    question:
      'Remove leading and trailing spaces from the string "    hello    world    ".',
    data: "    hello    world    ",
    expected_result: "hello    world",
    solution: "data.trim()",
    category: "trim",
  },
  {
    question: 'Remove spaces from the string "     12345     ".',
    data: "     12345     ",
    expected_result: "12345",
    solution: "data.trim()",
    category: "trim",
  },

  {
    question: 'Remove leading spaces from the string "   Hello World".',
    data: "   Hello World",
    expected_result: "Hello World",
    solution: "data.trimStart()",
    category: "trimStart",
  },
  {
    question: 'Remove leading spaces from the string "   JavaScript".',
    data: "   JavaScript",
    expected_result: "JavaScript",
    solution: "data.trimStart()",
    category: "trimStart",
  },
  {
    question: 'Remove leading spaces from the string "   abc".',
    data: "   abc",
    expected_result: "abc",
    solution: "data.trimStart()",
    category: "trimStart",
  },
  {
    question: 'Remove leading spaces from the string "    hello world".',
    data: "    hello world",
    expected_result: "hello world",
    solution: "data.trimStart()",
    category: "trimStart",
  },
  {
    question: 'Remove leading spaces from the string "     12345".',
    data: "     12345",
    expected_result: "12345",
    solution: "data.trimStart()",
    category: "trimStart",
  },

  {
    question: 'Remove trailing spaces from the string "Hello World   ".',
    data: "Hello World   ",
    expected_result: "Hello World",
    solution: "data.trimEnd()",
    category: "trimEnd",
  },
  {
    question: 'Remove trailing spaces from the string "JavaScript   ".',
    data: "JavaScript   ",
    expected_result: "JavaScript",
    solution: "data.trimEnd()",
    category: "trimEnd",
  },
  {
    question: 'Remove trailing spaces from the string "abc    ".',
    data: "abc    ",
    expected_result: "abc",
    solution: "data.trimEnd()",
    category: "trimEnd",
  },
  {
    question: 'Remove trailing spaces from the string "hello world    ".',
    data: "hello world    ",
    expected_result: "hello world",
    solution: "data.trimEnd()",
    category: "trimEnd",
  },
  {
    question: 'Remove trailing spaces from the string "12345     ".',
    data: "12345     ",
    expected_result: "12345",
    solution: "data.trimEnd()",
    category: "trimEnd",
  },
  {
    question:
      "Pad the string 'Java' with leading zeros to a total length of 6.",
    data: "Java",
    expected_result: "00Java",
    solution: "data.padStart(6, '0')",
    category: "padStart",
  },
  {
    question:
      "Pad the string 'cat' with leading asterisks to a total length of 5.",
    data: "cat",
    expected_result: "**cat",
    solution: "data.padStart(5, '*')",
    category: "padStart",
  },
  {
    question:
      "Pad the string '123' with leading dashes to a total length of 8.",
    data: "123",
    expected_result: "----123",
    solution: "data.padStart(8, '-')",
    category: "padStart",
  },
  {
    question:
      "Pad the string 'hello' with leading spaces to a total length of 10.",
    data: "hello",
    expected_result: "     hello",
    solution: "data.padStart(10, ' ')",
    category: "padStart",
  },
  {
    question:
      "Pad the string 'short' with leading exclamation marks to a total length of 8.",
    data: "short",
    expected_result: "!!short",
    solution: "data.padStart(8, '!')",
    category: "padStart",
  },
  {
    question:
      "Pad the string 'abc' with trailing spaces to a total length of 6.",
    data: "abc",
    expected_result: "abc   ",
    solution: "data.padEnd(6, ' ')",
    category: "padEnd",
  },
  {
    question:
      "Pad the string 'dog' with trailing stars to a total length of 7.",
    data: "dog",
    expected_result: "dog****",
    solution: "data.padEnd(7, '*')",
    category: "padEnd",
  },
  {
    question:
      "Pad the string 'test' with trailing dashes to a total length of 10.",
    data: "test",
    expected_result: "test------",
    solution: "data.padEnd(10, '-')",
    category: "padEnd",
  },
  {
    question:
      "Pad the string 'hello' with trailing underscores to a total length of 12.",
    data: "hello",
    expected_result: "hello______",
    solution: "data.padEnd(12, '_')",
    category: "padEnd",
  },
  {
    question:
      "Pad the string 'openai' with trailing question marks to a total length of 10.",
    data: "openai",
    expected_result: "openai????",
    solution: "data.padEnd(10, '?')",
    category: "padEnd",
  },
  {
    question: "Check if the string 'JavaScript' starts with 'Java'.",
    data: "JavaScript",
    expected_result: "true",
    solution: "data.startsWith('Java')",
    category: "startsWith",
  },
  {
    question: "Check if the string 'JavaScript' starts with 'Script'.",
    data: "JavaScript",
    expected_result: "false",
    solution: "data.startsWith('Script')",
    category: "startsWith",
  },
  {
    question: "Check if the string 'Hello world' starts with 'Hello'.",
    data: "Hello world",
    expected_result: "true",
    solution: "data.startsWith('Hello')",
    category: "startsWith",
  },
  {
    question: "Check if the string 'abc123' starts with 'abc'.",
    data: "abc123",
    expected_result: "true",
    solution: "data.startsWith('abc')",
    category: "startsWith",
  },
  {
    question: "Check if the string 'openai' starts with 'o'.",
    data: "openai",
    expected_result: "true",
    solution: "data.startsWith('o')",
    category: "startsWith",
  },
  {
    question: "Check if the string 'openai' starts with 'ai'.",
    data: "openai",
    expected_result: "false",
    solution: "data.startsWith('ai')",
    category: "startsWith",
  },
  {
    question: "Check if the string 'JavaScript' ends with 'Script'.",
    data: "JavaScript",
    expected_result: "true",
    solution: "data.endsWith('Script')",
    category: "endsWith",
  },
  {
    question: "Check if the string 'JavaScript' ends with 'Java'.",
    data: "JavaScript",
    expected_result: "false",
    solution: "data.endsWith('Java')",
    category: "endsWith",
  },
  {
    question: "Check if the string 'Hello world' ends with 'world'.",
    data: "Hello world",
    expected_result: "true",
    solution: "data.endsWith('world')",
    category: "endsWith",
  },
  {
    question: "Check if the string 'abc123' ends with '123'.",
    data: "abc123",
    expected_result: "true",
    solution: "data.endsWith('123')",
    category: "endsWith",
  },
  {
    question: "Check if the string 'openai' ends with 'ai'.",
    data: "openai",
    expected_result: "true",
    solution: "data.endsWith('ai')",
    category: "endsWith",
  },
  {
    question: "Check if the string 'openai' ends with 'open'.",
    data: "openai",
    expected_result: "false",
    solution: "data.endsWith('open')",
    category: "endsWith",
  },
  {
    question: "Check if the string 'abcdef' starts with 'abc'.",
    data: "abcdef",
    expected_result: "true",
    solution: "data.startsWith('abc')",
    category: "startsWith",
  },
  {
    question: "Check if the string 'abcdef' starts with 'def'.",
    data: "abcdef",
    expected_result: "false",
    solution: "data.startsWith('def')",
    category: "startsWith",
  },
  {
    question: "Check if the string 'hello' ends with 'o'.",
    data: "hello",
    expected_result: "true",
    solution: "data.endsWith('o')",
    category: "endsWith",
  },
  {
    question: "Check if the string 'hello' ends with 'h'.",
    data: "hello",
    expected_result: "false",
    solution: "data.endsWith('h')",
    category: "endsWith",
  },

  {
    question: "Repeat the string 'abc' 3 times.",
    data: "abc",
    expected_result: "abcabcabc",
    solution: "data.repeat(3)",
    category: "repeat",
  },
  {
    question: "Repeat the string '!' 5 times.",
    data: "!",
    expected_result: "!!!!!",
    solution: "data.repeat(5)",
    category: "repeat",
  },
  {
    question: "Repeat the string 'hello' 2 times.",
    data: "hello",
    expected_result: "hellohello",
    solution: "data.repeat(2)",
    category: "repeat",
  },
  {
    question: "Repeat the string '123' 4 times.",
    data: "123",
    expected_result: "123123123123",
    solution: "data.repeat(4)",
    category: "repeat",
  },
  {
    question: "Repeat the string 'openai' 1 time.",
    data: "openai",
    expected_result: "openai",
    solution: "data.repeat(1)",
    category: "repeat",
  },

  {
    question: "Find the first occurrence of 'a' in the string 'JavaScript'.",
    data: "JavaScript",
    expected_result: "1",
    solution: "data.indexOf('a')",
    category: "indexOf",
  },
  {
    question: "Find the first occurrence of 'S' in the string 'JavaScript'.",
    data: "JavaScript",
    expected_result: "4",
    solution: "data.indexOf('S')",
    category: "indexOf",
  },
  {
    question: "Find the first occurrence of 'o' in the string 'Hello world'.",
    data: "Hello world",
    expected_result: "4",
    solution: "data.indexOf('o')",
    category: "indexOf",
  },
  {
    question: "Find the first occurrence of 'e' in the string 'abcdef'.",
    data: "abcdef",
    expected_result: "1",
    solution: "data.indexOf('e')",
    category: "indexOf",
  },
  {
    question: "Find the first occurrence of 'l' in the string 'hello'.",
    data: "hello",
    expected_result: "2",
    solution: "data.indexOf('l')",
    category: "indexOf",
  },
  {
    question: "Find the first occurrence of 'z' in the string 'apple'.",
    data: "apple",
    expected_result: "-1",
    solution: "data.indexOf('z')",
    category: "indexOf",
  },
  {
    question: "Find the last occurrence of 'a' in the string 'JavaScript'.",
    data: "JavaScript",
    expected_result: "3",
    solution: "data.lastIndexOf('a')",
    category: "lastIndexOf",
  },
  {
    question: "Find the last occurrence of 'o' in the string 'Hello world'.",
    data: "Hello world",
    expected_result: "7",
    solution: "data.lastIndexOf('o')",
    category: "lastIndexOf",
  },
  {
    question: "Find the last occurrence of 'l' in the string 'hello'.",
    data: "hello",
    expected_result: "3",
    solution: "data.lastIndexOf('l')",
    category: "lastIndexOf",
  },
  {
    question: "Find the last occurrence of 'e' in the string 'abcdef'.",
    data: "abcdef",
    expected_result: "1",
    solution: "data.lastIndexOf('e')",
    category: "lastIndexOf",
  },
  {
    question: "Find the last occurrence of 'l' in the string 'balloon'.",
    data: "balloon",
    expected_result: "4",
    solution: "data.lastIndexOf('l')",
    category: "lastIndexOf",
  },
  {
    question: "Find the last occurrence of 'a' in the string 'apple'.",
    data: "apple",
    expected_result: "0",
    solution: "data.lastIndexOf('a')",
    category: "lastIndexOf",
  },
  {
    question: "Find the last occurrence of 'e' in the string 'apple'.",
    data: "apple",
    expected_result: "4",
    solution: "data.lastIndexOf('e')",
    category: "lastIndexOf",
  },
  {
    question:
      "Find the first occurrence of 'a' starting from index 2 in the string 'banana'.",
    data: "banana",
    expected_result: "3",
    solution: "data.indexOf('a', 2)",
    category: "indexOf",
  },
  {
    question:
      "Find the first occurrence of 'n' starting from index 3 in the string 'banana'.",
    data: "banana",
    expected_result: "4",
    solution: "data.indexOf('n', 3)",
    category: "indexOf",
  },
  {
    question:
      "Find the last occurrence of 'a' starting from index 3 in the string 'banana'.",
    data: "banana",
    expected_result: "5",
    solution: "data.lastIndexOf('a', 3)",
    category: "lastIndexOf",
  },
  {
    question:
      "Find the last occurrence of 'n' starting from index 4 in the string 'banana'.",
    data: "banana",
    expected_result: "4",
    solution: "data.lastIndexOf('n', 4)",
    category: "lastIndexOf",
  },

  {
    question:
      "Find the first match of the pattern 'a' in the string 'JavaScript'.",
    data: "JavaScript",
    expected_result: "1",
    solution: "data.search(/a/)",
    category: "search",
  },
  {
    question:
      "Find the first match of the pattern 'S' in the string 'JavaScript'.",
    data: "JavaScript",
    expected_result: "4",
    solution: "data.search(/S/)",
    category: "search",
  },
  {
    question:
      "Find the first match of the pattern 'o' in the string 'Hello world'.",
    data: "Hello world",
    expected_result: "4",
    solution: "data.search(/o/)",
    category: "search",
  },
  {
    question: "Find the first match of the pattern 'e' in the string 'abcdef'.",
    data: "abcdef",
    expected_result: "1",
    solution: "data.search(/e/)",
    category: "search",
  },
  {
    question: "Find the first match of the pattern 'l' in the string 'hello'.",
    data: "hello",
    expected_result: "2",
    solution: "data.search(/l/)",
    category: "search",
  },
  {
    question: "Find the first match of the pattern 'z' in the string 'apple'.",
    data: "apple",
    expected_result: "-1",
    solution: "data.search(/z/)",
    category: "search",
  },
  {
    question:
      "Find the first match of the pattern '\\d' (digit) in the string 'abc123'.",
    data: "abc123",
    expected_result: "3",
    solution: "data.search(/\\d/)",
    category: "search",
  },
  {
    question:
      "Find the first match of the pattern 'world' in the string 'Hello world'.",
    data: "Hello world",
    expected_result: "6",
    solution: "data.search(/world/)",
    category: "search",
  },
  {
    question:
      "Find the first match of the pattern '[aeiou]' (vowel) in the string 'hello'.",
    data: "hello",
    expected_result: "1",
    solution: "data.search(/[aeiou]/)",
    category: "search",
  },
  {
    question:
      "Find the first match of the pattern '\\d+' (one or more digits) in the string 'The year is 2025'.",
    data: "The year is 2025",
    expected_result: "15",
    solution: "data.search(/\\d+/)",
    category: "search",
  },

  {
    question: "Check if the string 'JavaScript' includes 'Script'.",
    data: "JavaScript",
    expected_result: "true",
    solution: "data.includes('Script')",
    category: "includes",
  },
  {
    question: "Check if the string 'Hello world' includes 'world'.",
    data: "Hello world",
    expected_result: "true",
    solution: "data.includes('world')",
    category: "includes",
  },
  {
    question: "Check if the string 'abcdef' includes 'abc'.",
    data: "abcdef",
    expected_result: "true",
    solution: "data.includes('abc')",
    category: "includes",
  },
  {
    question: "Check if the string 'hello' includes 'e'.",
    data: "hello",
    expected_result: "true",
    solution: "data.includes('e')",
    category: "includes",
  },
  {
    question: "Check if the string 'apple' includes 'z'.",
    data: "apple",
    expected_result: "false",
    solution: "data.includes('z')",
    category: "includes",
  },
  {
    question: "Check if the string 'The year is 2025' includes '2025'.",
    data: "The year is 2025",
    expected_result: "true",
    solution: "data.includes('2025')",
    category: "includes",
  },
  {
    question: "Check if the string 'openai' includes 'ai'.",
    data: "openai",
    expected_result: "true",
    solution: "data.includes('ai')",
    category: "includes",
  },
  {
    question: "Check if the string 'openai' includes 'open'.",
    data: "openai",
    expected_result: "true",
    solution: "data.includes('open')",
    category: "includes",
  },
  {
    question: "Check if the string 'hello' includes 'l'.",
    data: "hello",
    expected_result: "true",
    solution: "data.includes('l')",
    category: "includes",
  },
  {
    question: "Check if the string 'hello' includes 'z'.",
    data: "hello",
    expected_result: "false",
    solution: "data.includes('z')",
    category: "includes",
  },

  {
    question: "Create a Date object for the current date and time.",
    data: "new Date()",
    expected_result: "Current date and time",
    solution: "new Date()",
    category: "Date",
  },
  {
    question: "Create a Date object for January 1, 2025, 12:00:00 AM.",
    data: "new Date('2025-01-01T00:00:00')",
    expected_result: "Thu Jan 01 2025 00:00:00 GMT...",
    solution: "new Date('2025-01-01T00:00:00')",
    category: "Date",
  },
  {
    question:
      "Create a Date object for the Unix Epoch (January 1, 1970, 00:00:00 UTC).",
    data: "new Date(0)",
    expected_result: "Thu Jan 01 1970 00:00:00 GMT...",
    solution: "new Date(0)",
    category: "Date",
  },
  {
    question: "Get the current year from a Date object.",
    data: "new Date()",
    expected_result: "2025",
    solution: "new Date().getFullYear()",
    category: "Date",
  },
  {
    question: "Get the current month (0-based) from a Date object.",
    data: "new Date()",
    expected_result: "1",
    solution: "new Date().getMonth()",
    category: "Date",
  },
  {
    question: "Get the current day of the month from a Date object.",
    data: "new Date()",
    expected_result: "12",
    solution: "new Date().getDate()",
    category: "Date",
  },
  {
    question:
      "Get the current day of the week (0-Sunday, 6-Saturday) from a Date object.",
    data: "new Date()",
    expected_result: "1",
    solution: "new Date().getDay()",
    category: "Date",
  },
  {
    question: "Get the current hours from a Date object.",
    data: "new Date()",
    expected_result: "16",
    solution: "new Date().getHours()",
    category: "Date",
  },
  {
    question: "Get the current minutes from a Date object.",
    data: "new Date()",
    expected_result: "25",
    solution: "new Date().getMinutes()",
    category: "Date",
  },
  {
    question: "Create a Date object for the date 'March 15, 2022'.",
    data: "new Date('2022-03-15')",
    expected_result: "Tue Mar 15 2022 00:00:00 GMT...",
    solution: "new Date('2022-03-15')",
    category: "Date",
  },

  {
    question: "Convert the current date into a string using toString().",
    data: "new Date()",
    expected_result:
      "Wed Feb 12 2025 16:30:45 GMT+0000 (Coordinated Universal Time)",
    solution: "new Date().toString()",
    category: "Date to String",
  },
  {
    question: "Convert the current date into a string using toDateString().",
    data: "new Date()",
    expected_result: "Wed Feb 12 2025",
    solution: "new Date().toDateString()",
    category: "Date to String",
  },
  {
    question:
      "Convert the current date into a string using toLocaleDateString().",
    data: "new Date()",
    expected_result: "2/12/2025",
    solution: "new Date().toLocaleDateString()",
    category: "Date to String",
  },
  {
    question: "Convert the current date into a string using toISOString().",
    data: "new Date()",
    expected_result: "2025-02-12T16:30:45.000Z",
    solution: "new Date().toISOString()",
    category: "Date to String",
  },
  {
    question: "Convert the current date into a string using toUTCString().",
    data: "new Date()",
    expected_result: "Wed, 12 Feb 2025 16:30:45 GMT",
    solution: "new Date().toUTCString()",
    category: "Date to String",
  },
  {
    question: "Convert the current date into a string using toTimeString().",
    data: "new Date()",
    expected_result: "16:30:45 GMT+0000 (Coordinated Universal Time)",
    solution: "new Date().toTimeString()",
    category: "Date to String",
  },
  {
    question:
      "Convert the current date into a string using toLocaleTimeString().",
    data: "new Date()",
    expected_result: "4:30:45 PM",
    solution: "new Date().toLocaleTimeString()",
    category: "Date to String",
  },
  {
    question:
      "Convert a specific date '2025-01-01' into a string using toDateString().",
    data: "new Date('2025-01-01')",
    expected_result: "Thu Jan 01 2025",
    solution: "new Date('2025-01-01').toDateString()",
    category: "Date to String",
  },
  {
    question:
      "Convert the current date into a string in 'en-US' locale using toLocaleDateString().",
    data: "new Date()",
    expected_result: "2/12/2025",
    solution: "new Date().toLocaleDateString('en-US')",
    category: "Date to String",
  },
  {
    question:
      "Convert a specific date '2025-03-15' into a string using toISOString().",
    data: "new Date('2025-03-15')",
    expected_result: "2025-03-15T00:00:00.000Z",
    solution: "new Date('2025-03-15').toISOString()",
    category: "Date to String",
  },
  {
    question: "Access a property of an object using dot notation",
    data: { name: "John", age: 30 },
    expected_result: "John",
    solution: "data.name",
    category: "object property access"
  },
  {
    question: "Access a property of an object using bracket notation",
    data: { name: "Jane", age: 25 },
    expected_result: "Jane",
    solution: "data['name']",
    category: "object property access"
  },
  {
    question: "Access a property of an object with a dynamic key",
    data: { firstName: "Alice", lastName: "Doe" },
    expected_result: "Doe",
    solution: "data[lastName]",
    category: "object property access"
  },
  {
    question: "Access a nested property of an object",
    data: { user: { name: "Eve", address: { city: "Paris" } } },
    expected_result: "Paris",
    solution: "data.user.address.city",
    category: "object property access"
  },
  {
    question: "Access a property of an object with a key that includes spaces",
    data: { "first name": "Charlie", "last name": "Brown" },
    expected_result: "Charlie",
    solution: "data['first name']",
    category: "object property access"
  },
  {
    question: "Check if a property exists in an object",
    data: { brand: "Toyota", model: "Corolla" },
    expected_result: true,
    solution: "'model' in data",
    category: "object property access"
  },
  {
    question: "Access a property of an object with undefined key",
    data: { color: "blue", size: "large" },
    expected_result: undefined,
    solution: "data['weight']",
    category: "object property access"
  },
  {
    question: "Access a property of an object using a variable",
    data: { fruit: "apple", color: "green" },
    expected_result: "apple",
    solution: "const key = 'fruit'; data[key]",
    category: "object property access"
  },
  {
    question: "Access the first item in an array property of an object",
    data: { fruits: ["apple", "banana", "cherry"] },
    expected_result: "apple",
    solution: "data.fruits[0]",
    category: "object property access"
  },
  {
    question: "Access a property in a nested object with multiple levels",
    data: { user: { profile: { name: "Sam", age: 22 } } },
    expected_result: "Sam",
    solution: "data.user.profile.name",
    category: "object property access"
  },
  {
    question: "Add a new property to an object",
    data: { name: "Alice", age: 25 },
    expected_result: { name: "Alice", age: 25, city: "New York" },
    solution: "data.city = 'New York'",
    category: "add or modify object properties"
  },
  {
    question: "Modify an existing property of an object",
    data: { name: "Bob", age: 30 },
    expected_result: { name: "Bob", age: 35 },
    solution: "data.age = 35",
    category: "add or modify object properties"
  },
  {
    question: "Add a property to an object using bracket notation",
    data: { name: "Charlie", age: 28 },
    expected_result: { name: "Charlie", age: 28, country: "USA" },
    solution: "data['country'] = 'USA'",
    category: "add or modify object properties"
  },
  {
    question: "Modify a property of an object using bracket notation",
    data: { name: "David", city: "Paris" },
    expected_result: { name: "David", city: "London" },
    solution: "data['city'] = 'London'",
    category: "add or modify object properties"
  },
  {
    question: "Add a property with a dynamic key",
    data: { name: "Eve", age: 22 },
    expected_result: { name: "Eve", age: 22, 'favorite color': 'blue' },
    solution: "const key = 'favorite color'; data[key] = 'blue'",
    category: "add or modify object properties"
  },
  {
    question: "Add multiple properties to an object",
    data: { name: "Frank" },
    expected_result: { name: "Frank", age: 40, city: "Berlin" },
    solution: "data.age = 40; data.city = 'Berlin'",
    category: "add or modify object properties"
  },
  {
    question: "Modify a property inside a nested object",
    data: { user: { name: "Grace", age: 26 } },
    expected_result: { user: { name: "Grace", age: 27 } },
    solution: "data.user.age = 27",
    category: "add or modify object properties"
  },
  {
    question: "Add a property to an empty object",
    data: {},
    expected_result: { hobby: "reading" },
    solution: "data.hobby = 'reading'",
    category: "add or modify object properties"
  },
  {
    question: "Add a property with a number value",
    data: { name: "Henry" },
    expected_result: { name: "Henry", salary: 50000 },
    solution: "data.salary = 50000",
    category: "add or modify object properties"
  },
  {
    question: "Modify a property with a boolean value",
    data: { name: "Isla", isActive: true },
    expected_result: { name: "Isla", isActive: false },
    solution: "data.isActive = false",
    category: "add or modify object properties"
  },
  {
    question: "Add a method to an object",
    data: { name: "Jack" },
    expected_result: { name: "Jack", greet: function() { return 'Hello!'; } },
    solution: "data.greet = function() { return 'Hello!'; }",
    category: "add or modify object properties"
  },
  {
    question: "Add a property with a null value",
    data: { name: "Kara" },
    expected_result: { name: "Kara", address: null },
    solution: "data.address = null",
    category: "add or modify object properties"
  },
  {
    question: "Change the value of a property to an array",
    data: { name: "Liam" },
    expected_result: { name: "Liam", skills: ["JavaScript", "Python"] },
    solution: "data.skills = ['JavaScript', 'Python']",
    category: "add or modify object properties"
  },
  {
    question: "Add a property with a date value",
    data: { name: "Mia" },
    expected_result: { name: "Mia", birthdate: "1995-12-05" },
    solution: "data.birthdate = '1995-12-05'",
    category: "add or modify object properties"
  },
  {
    question: "Remove a property from an object using delete",
    data: { name: "Alice", age: 25 },
    expected_result: { age: 25 },
    solution: "delete data.name",
    category: "delete object properties"
  },
  {
    question: "Remove a property from an object using bracket notation",
    data: { name: "Bob", city: "Paris" },
    expected_result: { city: "Paris" },
    solution: "delete data['name']",
    category: "delete object properties"
  },
  {
    question: "Delete a nested property from an object",
    data: { user: { name: "Charlie", age: 30 } },
    expected_result: { user: { age: 30 } },
    solution: "delete data.user.name",
    category: "delete object properties"
  },
  {
    question: "Check if a property exists before deleting it",
    data: { name: "David", city: "London" },
    expected_result: { name: "David" },
    solution: "if ('city' in data) { delete data.city; }",
    category: "delete object properties"
  },
  {
    question: "Remove a property from an object using a variable key",
    data: { name: "Eve", age: 22 },
    expected_result: { age: 22 },
    solution: "const key = 'name'; delete data[key]",
    category: "delete object properties"
  },
  {
    question: "Delete a property from an object with a key containing spaces",
    data: { "first name": "Frank", age: 35 },
    expected_result: { age: 35 },
    solution: "delete data['first name']",
    category: "delete object properties"
  },
  {
    question: "Delete a property from an object that doesn't exist",
    data: { name: "Grace", age: 26 },
    expected_result: { name: "Grace", age: 26 },
    solution: "delete data.city",
    category: "delete object properties"
  },
  {
    question: "Remove multiple properties from an object",
    data: { name: "Henry", age: 40, city: "Berlin" },
    expected_result: { name: "Henry" },
    solution: "delete data.age; delete data.city",
    category: "delete object properties"
  },
  {
    question: "Remove the first property from an object (no direct way to access first property)",
    data: { name: "Isla", country: "USA", age: 28 },
    expected_result: { country: "USA", age: 28 },
    solution: "delete data.name",
    category: "delete object properties"
  },
  {
    question: "Delete a property from an empty object",
    data: {},
    expected_result: {},
    solution: "delete data.property",
    category: "delete object properties"
  },
  {
    question: "Check if a property exists in an object using 'in' operator",
    data: { name: "Alice", age: 25 },
    expected_result: true,
    solution: "'age' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object using 'hasOwnProperty()' method",
    data: { name: "Bob", city: "Paris" },
    expected_result: true,
    solution: "data.hasOwnProperty('city')",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object using 'in' for a non-existing property",
    data: { name: "Charlie", age: 30 },
    expected_result: false,
    solution: "'country' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object with a dynamic key",
    data: { name: "David", age: 40 },
    expected_result: true,
    solution: "const key = 'name'; key in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object using 'hasOwnProperty()' for a non-existing property",
    data: { name: "Eve", city: "New York" },
    expected_result: false,
    solution: "data.hasOwnProperty('country')",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object with a key containing spaces",
    data: { "first name": "Frank", age: 35 },
    expected_result: true,
    solution: "'first name' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an empty object",
    data: {},
    expected_result: false,
    solution: "'name' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists using 'in' for a nested property",
    data: { user: { name: "Grace", age: 26 } },
    expected_result: true,
    solution: "'user' in data && 'name' in data.user",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object with a null value",
    data: { name: "Henry", address: null },
    expected_result: true,
    solution: "'address' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists when the property is undefined",
    data: { name: "Isla", age: undefined },
    expected_result: true,
    solution: "'age' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists using 'in' for a property with an undefined value",
    data: { name: "Jack", country: undefined },
    expected_result: true,
    solution: "'country' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object that was deleted",
    data: { name: "Liam", age: 27 },
    expected_result: false,
    solution: "delete data.age; 'age' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object using 'in' for a property with an empty string value",
    data: { name: "Mia", city: "" },
    expected_result: true,
    solution: "'city' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists using 'in' for a property with a boolean value",
    data: { active: true, name: "Nina" },
    expected_result: true,
    solution: "'active' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in a nested object using 'in'",
    data: { user: { profile: { name: "Olivia", age: 30 } } },
    expected_result: true,
    solution: "'profile' in data.user",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object with a property set to null",
    data: { name: "Paul", hobby: null },
    expected_result: true,
    solution: "'hobby' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists using 'in' for a property with a zero value",
    data: { count: 0, name: "Quinn" },
    expected_result: true,
    solution: "'count' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object after adding a new property dynamically",
    data: { name: "Rachel" },
    expected_result: true,
    solution: "data.city = 'Seattle'; 'city' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists using 'in' for an array property in an object",
    data: { fruits: ["apple", "banana", "cherry"] },
    expected_result: true,
    solution: "'fruits' in data",
    category: "check property existence"
  },
  {
    question: "Check if a property exists in an object when using a variable key and the property exists",
    data: { name: "Sam", age: 32 },
    expected_result: true,
    solution: "const key = 'name'; key in data",
    category: "check property existence"
  },
  {
    question: "Iterate over an object's properties using for...in",
    data: { name: "Alice", age: 25, city: "New York" },
    expected_result: ["name", "age", "city"],
    solution: "for (const key in data) { console.log(key); }",
    category: "object property iteration"
  },
  {
    question: "Iterate over an object's properties and print values using for...in",
    data: { name: "Bob", city: "Paris" },
    expected_result: ["Bob", "Paris"],
    solution: "for (const key in data) { console.log(data[key]); }",
    category: "object property iteration"
  },
  {
    question: "Use for...in to iterate over an object and check if a property exists",
    data: { name: "Charlie", age: 30 },
    expected_result: true,
    solution: "let exists = false; for (const key in data) { if (key === 'age') { exists = true; } } console.log(exists);",
    category: "object property iteration"
  },
  {
    question: "Skip a property during for...in iteration",
    data: { name: "David", city: "London", age: 40 },
    expected_result: ["name", "city"],
    solution: "for (const key in data) { if (key !== 'age') { console.log(key); } }",
    category: "object property iteration"
  },
  {
    question: "Check if a property is directly on the object (not inherited) during for...in iteration",
    data: { name: "Eve", age: 22 },
    expected_result: ["name", "age"],
    solution: "for (const key in data) { if (data.hasOwnProperty(key)) { console.log(key); } }",
    category: "object property iteration"
  },
  {
    question: "Iterate over an object with a method property using for...in",
    data: { name: "Frank", greet: function() { return 'Hello'; } },
    expected_result: ["name", "greet"],
    solution: "for (const key in data) { console.log(key); }",
    category: "object property iteration"
  },
  {
    question: "Use for...in to iterate over an object with properties that are arrays",
    data: { fruits: ["apple", "banana", "cherry"], city: "Berlin" },
    expected_result: ["fruits", "city"],
    solution: "for (const key in data) { console.log(key); }",
    category: "object property iteration"
  },
  {
    question: "Use for...in to iterate over an object and perform a calculation on its values",
    data: { a: 5, b: 10, c: 15 },
    expected_result: [15, 20, 25],
    solution: "for (const key in data) { console.log(data[key] + 10); }",
    category: "object property iteration"
  },
  {
    question: "Iterate over an object that has a property with an undefined value using for...in",
    data: { name: "Grace", age: undefined },
    expected_result: ["name", "age"],
    solution: "for (const key in data) { console.log(key); }",
    category: "object property iteration"
  },
  {
    question: "Use for...in to iterate over an object and check for an empty value",
    data: { name: "Henry", city: "" },
    expected_result: ["name", "city"],
    solution: "for (const key in data) { if (data[key] === '') { console.log(key); } }",
    category: "object property iteration"
  },
  {
    question: "Iterate over an object with nested objects using for...in",
    data: { person: { name: "Isla", age: 28 }, city: "Seattle" },
    expected_result: ["person", "city"],
    solution: "for (const key in data) { console.log(key); }",
    category: "object property iteration"
  },
  {
    question: "Use for...in to iterate over an object with mixed data types",
    data: { name: "Jack", active: true, age: 35 },
    expected_result: ["name", "active", "age"],
    solution: "for (const key in data) { console.log(key); }",
    category: "object property iteration"
  },
  {
    question: "Iterate over an object and create a new object with the same keys and values using for...in",
    data: { name: "Kara", city: "Tokyo" },
    expected_result: { name: "Kara", city: "Tokyo" },
    solution: "let newObj = {}; for (const key in data) { newObj[key] = data[key]; } console.log(newObj);",
    category: "object property iteration"
  },
  {
    question: "Use for...in to iterate over an object and delete specific properties",
    data: { name: "Liam", age: 40, city: "Berlin" },
    expected_result: { name: "Liam", city: "Berlin" },
    solution: "for (const key in data) { if (key === 'age') { delete data[key]; } } console.log(data);",
    category: "object property iteration"
  },
  {
    question: "Iterate over an object and access both the key and the value using for...in",
    data: { name: "Mia", age: 22 },
    expected_result: [["name", "Mia"], ["age", 22]],
    solution: "for (const key in data) { console.log([key, data[key]]); }",
    category: "object property iteration"
  },
  {
    question: "Iterate over an object's keys using Object.keys()",
    data: { name: "Alice", age: 25, city: "New York" },
    expected_result: ["name", "age", "city"],
    solution: "Object.keys(data).forEach(key => console.log(key));",
    category: "object property iteration"
  },
  {
    question: "Get the values of an object using Object.keys()",
    data: { name: "Bob", city: "Paris" },
    expected_result: ["Bob", "Paris"],
    solution: "Object.keys(data).forEach(key => console.log(data[key]));",
    category: "object property iteration"
  },
  {
    question: "Create an array of keys from an object using Object.keys()",
    data: { name: "Charlie", age: 30 },
    expected_result: ["name", "age"],
    solution: "const keys = Object.keys(data); console.log(keys);",
    category: "object property iteration"
  },
  {
    question: "Use Object.keys() to check if a property exists in an object",
    data: { name: "David", age: 40 },
    expected_result: true,
    solution: "Object.keys(data).includes('age')",
    category: "object property iteration"
  },
  {
    question: "Use Object.keys() to count the number of properties in an object",
    data: { name: "Eve", city: "London", age: 22 },
    expected_result: 3,
    solution: "Object.keys(data).length",
    category: "object property iteration"
  },
  {
    question: "Filter keys using Object.keys() and a condition",
    data: { name: "Frank", age: 35, city: "Berlin" },
    expected_result: ["name", "age"],
    solution: "Object.keys(data).filter(key => key !== 'city')",
    category: "object property iteration"
  },
  {
    question: "Use Object.keys() to iterate over an object and access both key and value",
    data: { name: "Grace", age: 26 },
    expected_result: [["name", "Grace"], ["age", 26]],
    solution: "Object.keys(data).forEach(key => console.log([key, data[key]]));",
    category: "object property iteration"
  },
  {
    question: "Create a new object by copying only certain properties using Object.keys()",
    data: { name: "Henry", age: 40, city: "Berlin" },
    expected_result: { name: "Henry", city: "Berlin" },
    solution: "const filteredObj = {}; Object.keys(data).forEach(key => { if (key !== 'age') filteredObj[key] = data[key]; }); console.log(filteredObj);",
    category: "object property iteration"
  },
  {
    question: "Use Object.keys() to iterate over an object and add properties to a new array",
    data: { name: "Isla", city: "Seattle" },
    expected_result: ["name", "city"],
    solution: "const keysArray = Object.keys(data); console.log(keysArray);",
    category: "object property iteration"
  },
  {
    question: "Use Object.keys() to check if an object is empty",
    data: { name: "Jack" },
    expected_result: false,
    solution: "Object.keys(data).length === 0",
    category: "object property iteration"
  },
  {
    question: "Use Object.keys() to filter properties based on values",
    data: { name: "Kara", age: 22, city: "Tokyo" },
    expected_result: ["age"],
    solution: "Object.keys(data).filter(key => typeof data[key] === 'number')",
    category: "object property iteration"
  },
  {
    question: "Use Object.keys() to get keys of an object and sort them alphabetically",
    data: { name: "Liam", age: 30, city: "Paris" },
    expected_result: ["age", "city", "name"],
    solution: "Object.keys(data).sort()",
    category: "object property iteration"
  },
  {
    question: "Use Object.keys() to iterate over an object and modify its values",
    data: { name: "Mia", age: 22 },
    expected_result: { name: "Mia", age: 23 },
    solution: "Object.keys(data).forEach(key => { if (key === 'age') data[key] = 23; }); console.log(data);",
    category: "object property iteration"
  },
  {
    question: "Check if Object.keys() returns the keys in the correct order for an object",
    data: { b: 1, a: 2, c: 3 },
    expected_result: ["b", "a", "c"],
    solution: "console.log(Object.keys(data));",
    category: "object property iteration"
  },
  {
    question: "Use Object.keys() to create a new array of the values of specific properties",
    data: { name: "Nina", country: "Germany", age: 25 },
    expected_result: ["Nina", 25],
    solution: "const selectedValues = Object.keys(data).filter(key => key === 'name' || key === 'age').map(key => data[key]); console.log(selectedValues);",
    category: "object property iteration"
  },
  {
    question: "Iterate over an object's values using Object.values()",
    data: { name: "Alice", age: 25, city: "New York" },
    expected_result: ["Alice", 25, "New York"],
    solution: "Object.values(data).forEach(value => console.log(value));",
    category: "object property iteration"
  },
  {
    question: "Get the values of an object and print them with Object.values()",
    data: { name: "Bob", city: "Paris" },
    expected_result: ["Bob", "Paris"],
    solution: "Object.values(data).forEach(value => console.log(value));",
    category: "object property iteration"
  },
  {
    question: "Create an array of values from an object using Object.values()",
    data: { name: "Charlie", age: 30 },
    expected_result: ["Charlie", 30],
    solution: "const values = Object.values(data); console.log(values);",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to find a specific value in an object",
    data: { name: "David", age: 40 },
    expected_result: true,
    solution: "Object.values(data).includes(40)",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to count the number of values in an object",
    data: { name: "Eve", city: "London", age: 22 },
    expected_result: 3,
    solution: "Object.values(data).length",
    category: "object property iteration"
  },
  {
    question: "Filter values using Object.values() and a condition",
    data: { name: "Frank", age: 35, city: "Berlin" },
    expected_result: ["Frank", 35],
    solution: "Object.values(data).filter(value => typeof value === 'string')",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to iterate over an object and access each value",
    data: { name: "Grace", age: 26 },
    expected_result: ["Grace", 26],
    solution: "Object.values(data).forEach(value => console.log(value));",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to create a new object with selected values",
    data: { name: "Henry", age: 40, city: "Berlin" },
    expected_result: { name: "Henry", city: "Berlin" },
    solution: "const filteredObj = {}; Object.values(data).forEach((value, index) => { if (index !== 1) filteredObj[Object.keys(data)[index]] = value; }); console.log(filteredObj);",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to check if any value is a specific type",
    data: { name: "Isla", city: "Seattle", active: true },
    expected_result: true,
    solution: "Object.values(data).some(value => typeof value === 'boolean')",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to check if the object has an empty value",
    data: { name: "Jack", city: "" },
    expected_result: true,
    solution: "Object.values(data).includes('')",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to filter out values that are numbers",
    data: { name: "Kara", age: 22, city: "Tokyo" },
    expected_result: ["Kara", "Tokyo"],
    solution: "Object.values(data).filter(value => typeof value === 'string')",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to sort values alphabetically",
    data: { name: "Liam", age: 30, city: "Paris" },
    expected_result: [30, "Liam", "Paris"],
    solution: "Object.values(data).sort()",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to create an array of values and find their sum",
    data: { a: 5, b: 10, c: 15 },
    expected_result: 30,
    solution: "const sum = Object.values(data).reduce((acc, curr) => acc + curr, 0); console.log(sum);",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to find values that are not null",
    data: { name: "Mia", age: null, city: "Berlin" },
    expected_result: ["Mia", "Berlin"],
    solution: "Object.values(data).filter(value => value !== null)",
    category: "object property iteration"
  },
  {
    question: "Use Object.values() to create a new array of values based on a condition",
    data: { name: "Nina", age: 25, country: "Germany" },
    expected_result: [25],
    solution: "Object.values(data).filter(value => typeof value === 'number')",
    category: "object property iteration"
  },



    
        
      
      
    
    
  
  


];
