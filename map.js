  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results = [];
for (let num of nums) {
  results.push (num * 2);
}
console.log(results);

// Using map()

// Simplified w/ map()

//const multByTwo = num => num*2;
//const mapResults = nums.map(multByTwo); //Callback the multByTwo function
//console.log(mapResults);

// Simplfied w/ map() + arrow function


const multByTwo = num => num*2;
const mapResults = nums.map(num => num*2); //Callback the multByTwo function
console.log(mapResults);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentWithId = students.map(student => student.name + " : " + student.id);
console.log (studentWithId );
