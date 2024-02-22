
//Ass1
let setOfNumbers=new Set();
setOfNumbers.add(10)
setOfNumbers.add(20).add(2)


console.log(setOfNumbers);
//setOfNumbers.delete(1);

setOfNumbers.forEach((e=> e === 2 ? console.log(e):e));


// Needed Output
//Set(3) {10, 20, 2}
//2
console.log("-".repeat(30))
//ASS2
let myFriend = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let s=new Set(myFriend.sort())
console.log(s);



let myFriends= new Set(["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"]);
console.log(myFriends);
// Needed Output
//(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
console.log("-".repeat(30))
//ASS3

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
let mymap=new Map([
    ["username","Osama"],
    ["role", "Admin"],
    ["country","Egypt"]]);
    
console.log(mymap)
console.log(mymap.size)
console.log(mymap.has("role"))
  // Needed Output
  //Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
  //3
  //true
  console.log("-".repeat(30))

  //ASS4
  let theNumber = 100020003000;

  console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));
  // slice(true) --> 1 same thing


// Needed Output
//123


// ASS5
let theName = "Elzero";

console.log(Array.from(theName))
console.log(theName.split(""))
console.log([...theName])
console.log([... new Set(theName)])
console.log(Object.assign([],theName))


// Needed Output
//['E', 'l', 'z', 'e', 'r', 'o']
console.log("-".repeat(30))

//ASS6

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
//console.log(Array.copyWithin())

//chars.forEach(e=> e !== isNaN? e.Array.c: "")


console.log(chars.sort().copyWithin(0,3,-2))//OR 6


// Needed Output
//['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

console.log(chars2.sort().copyWithin(0,4,8))//
// Needed Output
//['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(chars3.copyWithin(2))//

// Needed Output
//["Z", "Y", "Z", "Y", "A", "D", "E"]




console.log("-".repeat(30))
//ASS7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];


let arr1=[...numsOne,...numsTwo]//m1

let arr2=numsOne.concat(numsTwo)//m2

let arr3=numsOne.push(...numsTwo)//m3
//let arr3=numsOne.push(numsTwo)//
/* if i did that it will appear [1,2,3,array(2)]
*/


console.log(arr1)
console.log(arr2)
console.log(numsOne)

// Needed Output
//[1, 2, 3, 4, 5, 6]







