 //                                                                    SECTION 1

console.log(1+2);
console.log("apple"+"orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0==false);
console.log(1===true);
console.log(2=='2');


//                                                                      SECTION 2
console.log("SECTION 2");
//   creating array  with 11 cricket people 
let team=["Dhoni","Virat","Jadeja","Rohit","Sachin","Sam","bumbrah","Warner","Ashwin","Strokes","Archer"];
// Print Array
console.log(team);

// Remove first 
team.splice(0,1);
console.log(team);

// length of the team 
console.log(team.length);

//  Add a player to the array 
team.push('Smith')
console.log(team);

// Sorting
// Making lowercase before sorting 
team.forEach((ele,ind) => {
    team[ind] = ele.toLowerCase();
});
// sorting 
team.sort();
console.log("after sorting in ascending order"+"  "+team);

// Random number 
let TeamNumber={}
// function to return 2 digit random number 
randomNumber=function(){
     return Math.floor(Math.random()*100);
}
//    assigning random number to each players 
for(let i in team){
    TeamNumber[team[i]]=randomNumber();

}
console.log(TeamNumber);

// Names of player in new array (UPPERCASE)
let teamUppercase=[];
team.forEach((ele,ind) => {
    teamUppercase[ind] = ele.toUpperCase();
});

console.log(teamUppercase);





//                                                                          SECTION 3



//1 Create a function from 1 to 100 

console.log("SECTION 3");
let n=1;
function num(){
     while(n<=100){
         console.log(n++);
     }
}
num();

//2 Create a function to display today date 

let a=new Date();
// function call 
date(a);
// function to return the date in DD/MM/YYYY format 
function date(a){
let date=a.getDate();
let month =a.getMonth();
let year=a.getFullYear();
console.log(date+"/"+month+"/"+year);
}

//3 Converting celsius to F

let b=27;
function CtoF(b){
     console.log((b*9/5)+32);
}
CtoF(27);

//4 Average of the number

let arr=[5,6,5,23,45,66];
sum=0;
function Avgarr(arr){
    for(i in arr){
        sum=+arr[i];
    }
    console.log(sum/arr.length);
}
Avgarr(arr);


//5 Reverse a string 

let str="Naveen";
  let strrev="";
function reverseStr(str){
     for(let i=str.length-1;i>=0;i--){
            strrev=strrev+str[i];
     }
     console.log(strrev);
}
reverseStr(str);
// 2nd method for reverse String 
// Destructing to array
let s=[...str]
//  reverse and join 
console.log(s.reverse().join(""));




