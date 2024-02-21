
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
  /*
let r;
/*
  theNumber.forEach((e=> e ===0? console.log("hh"):r.join(e)));
  console.log(r);*/
  

// Needed Output
//123
