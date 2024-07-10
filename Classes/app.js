//classes
//basic class
/*class Person {
    name: string = "zain";
    age: number = 12;
    hobbies: string[] =  ["coding", "sport"]
}

let person1 = new Person()

console.log(person1)*/
//constructor
class Person {
    //properties init
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
// variable 1
let person1 = new Person("Fahad", 15, ["coding", "Playing"]);
//variable 2
let person2 = new Person("Ariba", 17, ["Gardening", "sleeping"]);
console.log(person1);
console.log(person2);
//Inheritance
class Student extends Person {
    grade;
    constructor(name, age, hobbies, grade) {
        /* this.name = name,
                this.age = age,
                this.hobbies = hobbies,*/
        super(name, age, hobbies);
        this.grade = grade;
    }
    //(method)
    studentDetails() {
        return `I'm ${this.name}, I'm ${this.age} year old, my hobbies is ${this.hobbies.join(" ,")}. My Grade is ${this.grade}`;
    }
}
let student1 = new Student("Muhammad", 14, ["sport", "reading"], 10);
//call method
console.log(student1.studentDetails());
//inheritence
class Teacher extends Person {
    subject;
    address;
    //constructor
    constructor(name, age, hobbies, subject, address) {
        super(name, age, hobbies);
        (this.subject = subject);
        // If an address is provided, assign it to the class property
        if (address) {
            this.address = address;
        }
    }
    //(method)
    teacherDetails() {
        let addressString = ""; // Initialize an empty string to store the address
        if (this.address) { // If an address is available, format it as a string
            addressString = `${this.address.street}, ${this.address.city}`;
        }
        else {
            addressString = "Not available";
        }
        return `My name is ${this.name}, I'm ${this.age} year old. My hobbies are 
    ${this.hobbies.join(" , ")}, I'm teach ${this.subject}, and my address is ${addressString}`;
    }
}
let teacher1 = new Teacher("Muhammad", 21, ["teaching", "coding"], "Python Fast API", { street: "Main street", city: "karachi" });
console.log(teacher1.teacherDetails());
export {};
//getter and setter
/*class Person {
private _name: string;
private _age: number;
private _hobbies: string[];
private _address: string;
constructor(name: string, age: number, hobbies: string[], address: string) {
this._name = name;
this._age = age;
this._hobbies = hobbies;
this._address = address;
}
get name() {
return this._name;
}
set name(name: string) {
this._name = name;
}
get age() {
return this._age;
}
set age(age: number) {
this._age = age;
}
get hobbies() {
return this._hobbies;
}
set hobbies(hobbies: string[]) {
this._hobbies = hobbies;
}
get address() {
return this._address;

}
set address(address: string) {
this._address = address;
}
}
let person1 = new Person("Fahad", 15, ["coding", "Playing"]
, "Karachi");
console.log(person1.name);
console.log(person1.age);
console.log(person1.hobbies);
console.log(person1.address);*/
