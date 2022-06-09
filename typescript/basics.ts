// Primitives: number, strings, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 24;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ["A", "B", "C"];

// Type Alias
type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: "Max",
  age: 32,
};

// Wrong properties in object example
// person = {
//   isEmployee: true,
// };

// Array of people objects
let people: Person[];

// Type inference
let course = "React - The Complete Guide";
// course = 12341;

// Union Type
let room: string | number = "123";
room = 46;

// Functions & types
function add(a: number, b: number): number {
  return a + b;
}

// Rückgabewert "void"
function printOutput(value: any): void {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
//updatedArray[0].split(""); // Führt zum Fehler und wird nicht von TypeScript abgefangen!
