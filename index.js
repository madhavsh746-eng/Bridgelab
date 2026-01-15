console.log("Node.js");   // print information to the console so developers can see and debug their code.


let name="Madhav";           // String // declare a variable whose value can change.
let age=22;                   //number  // data type used to store numeric values (like 1, 10, or 3.14).
const country="India";        //Constant  // value that cannot be changed once it is set.
let isStudent = true;        // boolean   //  data type that has only two values: true or false.



console.log(name);
console.log(age);
console.log(country);
console.log(isStudent);



// Data Types
let score;                   // undefined
let data = null;             // null

console.log(score);
console.log(data);


// Objects
let user = {
    name: "madhav",
    age: 23,
    email: "madhavsh31@gmail.com"
};


// Operators
let a = 10;
let b = 5;

console.log("Add:", a+b);
console.log("Sub:", a-b);
console.log("Mul:", a*b);
console.log("Div:", a/b);

// Condition (if-else)

let ageCheck=18;
if(ageCheck >= 18){
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

//loop
for(let i=0;i<=5;i++){
    console.log("loop count : ",i);
}

// Function 
function add(x,y){
    return x+y;
}

let result= add(20,30);
console.log("function result : ",result);

// simple Backend login
const admin={
    username: "admin" ,
    password: "123456"
};


function login(user,pass){
    if(user=== admin.username && pass==admin.password){
        console.log("Login Successful");
    }else{
        console.log("Invalid UUsername or Password");
    }
}
login("admin","123456");

