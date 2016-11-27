/**
 * Created by soundararajanvenkatasubramanian on 11/27/16.
 */
// function add(a, b){
//     return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 9];
//
// console.log(add(...toAdd));

//
// var groupA = ['Deepika', 'Mahalakshmi'];
// var groupB = ['Vikram', 'Karpagam'];
//
// var final = [3, ...groupA, ...groupB];
// console.log(final);

var person = ["Deepika", 10];
var personTwo = ['Michelle', 11];

function greeting(values){
    var greet = "";
    values.forEach( (value, i) => {
       if(i % 2 == 0){
           greet = "Hi " + value;
       }else{
           greet = greet + ", You are " + value;
           console.log(greet);
           greet = "";
       }
    });
}
greeting([...person, ...personTwo]);

var names = ['Mike', 'Ben'];
var final = ['Deepika', ...names];

console.log(final);
final.forEach( (name) => {
   console.log("Hi " + name);
});
