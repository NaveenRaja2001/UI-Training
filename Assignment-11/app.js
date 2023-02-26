// calculator



// Arrow function declared in object



let calculator={
    add:(a,b)=> a+b
    ,
    sub:(a,b)=> a-b
    ,
    div:(a,b)=> a%b
    ,
    multi:(a,b)=> a*b
    
}


// normal function declared in object



// let calculator={
//     add:function(a, b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     div:function(a,b){
//         return a%b;
//     },
//     multi:function(a,b){
//         return a*b;
//     }

// }




// Function call 

console.log(calculator.add(5,10));
console.log(calculator.sub(5,10));
console.log(calculator.div(10,2));
console.log(calculator.multi(5,10));

