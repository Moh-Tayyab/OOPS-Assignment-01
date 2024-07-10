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
let exPersonOne;
exPersonOne = { name: "Leo", age: 40, jobTitle: "FreeLancer" };
console.log(exPersonOne.age); //outPut is: 40
console.log(exPersonOne["jobTitle"]); //outPut is: FreeLancerz
// And there is yet another method
let exPersonTwo = {
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
function animalDetail(pet) {
    console.log(`Name: ${pet.name}, Color: ${pet.color}`);
}
animalDetail({ name: "Pretty", color: "White" }); //output is: Name: Pretty, Color: white
let id = 19;
id = "Muhammad";
function getBear() {
    return {
        name: 'Teddy',
        color: 'Brown'
    };
}
let result = getBear();
console.log(result.name, result.color); //output is: "Teddy", "Brown"
function getPoint() {
    return {
        x: 1,
        y: 2,
        z: 3
    };
}
let answer = getPoint();
console.log(answer.x, answer.y, answer.z); //output is: 1, 2, 3
export {};
