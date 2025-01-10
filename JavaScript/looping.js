/*
Two kinds of looping
1. Normal looping
->for
->while
->do...while
2. Bit Advanced looping
->for in
->for of
->foreach
*/

//for in Loop

var a = [10,20,30]
var b = { "count": 70, "abs": 1 }
// for (let i in a){
//     console.log(i)
// }
// for (let i in b){
//     console.log(i, b[i])
// }
// set = new Set(["hello",1,2,"SECE","44",2,"hello","SECE",5])
// console.log(set);
// for (let i in set){
//     console.log("loop is running");
//     console.log(i)
// }
// O/P: It will not print anything in my set.

//for of loop.
for (let [i,j] of Object.entries(b)){
    console.log(i,j)
}