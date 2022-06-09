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

let person: {
  name: string;
  age: number;
};
person = { name: "Max", age: 32 };

// Wrong properties in object example
// person = {
//   isEmployee: true,
// };

// Array of people objects
let people: {
  name: string;
  age: number;
}[];

// Type inference
let course = "React - The Complete Guide";
// course = 12341;
