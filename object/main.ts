//Object

/*A colection of key-value pair that stored in a single variable*/

//example no. 01
const exPerson1 = {
  //properties initz
  //  key:   value
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"], //array
};
console.log(exPerson1.hobbies); //output is:  ['Sports', 'Cooking']

//example no. 02
const exPerson2 = {
  //properties initilize
  name: "Alice",
  age: 23,
  gender: "male",
  greet: function () {
    // local function
    return `I'm Happy to start learning programmming.`;
  },
};
console.log(exPerson2.greet()); //outPut is: I'm Happy to start learning programmming.

/*********************************
 * TYPE ANNOTATIONS WITH OBJECTS *
 *********************************/

let exPersonOne: {
  name: string;
  age: number;
  jobTitle: string;
};

exPersonOne = { name: "Leo", age: 40, jobTitle: "FreeLancer" };

console.log(exPersonOne.age); //outPut is: 40
console.log(exPersonOne["jobTitle"]); //outPut is: FreeLancerz

// And there is yet another method
let exPersonTwo: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    //nested object
    street: string;
    city: string;
  };
} = {
  //properties declaration
  name: "Alex",
  age: 32,
  jobTitle: "Engineer",
  address: {
    street: "brave 23",
    city: "Belgium",
  },
};

console.log(exPersonTwo.jobTitle); // outPut is: Engineer
console.log(exPersonTwo["name"], exPersonTwo.address); //outPut is: Alex { street: 'brave 23', city: 'Belgium'}

/*
Differences Between Type Aliases and Interfaces
Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
Almost all features of an interface are available in type, the key distinction is that a type cannot 
be re-opened to add new properties vs an interface which is always extendable.
*/

//type Alias
type Cat = {
  name: string;
  color: string;
};

function animalDetail(pet: Cat) {
  console.log(`Name: ${pet.name}, Color: ${pet.color}`);
}

animalDetail({ name: "Pretty", color: "White" }); //output is: Name: Pretty, Color: white

type ID = number | "Muhammad";

let id: ID = 19;

id = "Muhammad";

//id = "zain" //error type "zain" is not assignable to type ID

//Extending a type via intersections
type Animal = {
  name: string;
};

type Bear = Animal & {
  color: string;
};

function getBear(): Bear {
  return {
    name: 'Teddy',
    color: 'Brown'
  };
}

let result = getBear();
console.log(result.name, result.color); //output is: "Teddy", "Brown"

/*
type Bird = {
  name: string;
  cast?: string;
}

type Pegion  = Bird & {
  color: string;
}

function getPegion(): Pegion {
  return {
    name: 'Dabwala',
    cast: 'Higher Flyer',
    color: 'White and Black'
    }
}

let response = getPegion();
console.log(response.name, response.cast, response.color); //output is: "Dabwala", "Higher Flyer", "White and Black" */


//Extending an interface
interface Point{
  x: number;
  y: number;
}
interface Point3D extends Point{
  z: number;
  }

  function getPoint(): Point3D {
    return {
      x: 1,
      y: 2,
      z: 3
    }
  }

  let answer = getPoint();
  console.log(answer.x, answer.y, answer.z); //output is: 1, 2, 3
  

