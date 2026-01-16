let a= "Hello World";

// it give the lenght / height of a string and int this frist char is count by 1;

console.log(a.length);  

//it gives the vale of index of zero

consol.log(a.charAt(0));

// split is using for the reduse the space 

consol.log(a.split());

// it is use to  convert all upper case word in to lower case word;

let lower = a.toLowerCase();
consol.log(lower);

// it is use to  convert all  lower case word in to upper case word;

let tower = a.toUppererCase();
consol.log(tower);

//it is use to remove the space from left and right side of the string but not remove in middele the str

consol.log(a.trim);

// it give the the true and false answer if it present in string then print true if no ,print false;

consol.log(a.includes("Hello"));

// it is use for check that our string start with    give true and false


consol.log(a.startsWith("Hello"));

//// it is use for check that our string end with     give true and false

consol.log(a.endsWith("Hello"));

// it is use to find all sub string . it work on index;
consol.log(a.slice(a));

// it is use to replace the a with c;   
// replace all is use to replace all a in c;

consol.log(a.replace('a','c'));
consol.log(a.replaceAll('a','c'));


let p = "(([]))";

let q;
do {
  q = p;
  p = p.replace("()", "")
       .replace("[]", "")
       
} while (p !== q);

if (p.length === 0) {
  console.log("Valid");
} else {
  console.log("Not Valid");
}


let x = "I Am MaDhAv";
let result = "";

for (let i = 0; i < x.length; i++) {
  let ch = x[i];

  if (ch === ch.toUpperCase()) {
    result += ch.toLowerCase();
  } else {
    result += ch.toUpperCase();
  }
}

console.log(result); 
