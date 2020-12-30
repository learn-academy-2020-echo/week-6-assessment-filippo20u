// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."


const sentCap = (arr) => {
 let describe = arr.map( value => {
  //  setting a new variable that split the array to capitalize first and last name and joined them back together
    let namesCap = value.name.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ")
    // console.log (namesCap)
    // string interpolation with the new variable from line 17 and the occupation from the original array of objects
    return `${namesCap} is ${value.occupation}`
    })
      return describe
}

console.log("1)", sentCap(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const filtAndRemainder =  (arr) => {
//  filter only numbers using typeof and map them getting only the remainder of the numbers divided by 3.
  return arr.filter ( value => typeof value === 'number' ).map (value => value % 3)
  // console.log (filtered)   
  
}

console.log("2.1)", filtAndRemainder(testingArray1))
console.log("2.2)", filtAndRemainder(testingArray2))

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

  const noDup = (arr1, arr2) => {
    // merging the two arrays in one using .concat 
    let nodup = arr1.concat(arr2)
    // filter the new array using hte indexOf built in method.
    return nodup.filter((value, index) => 
    // The indexOf() method returns the position of the first occurrence of a specified value in a string.
    nodup.indexOf(value) === index
    )
  }
    console.log ("3:", noDup(testingArray3,testingArray4))