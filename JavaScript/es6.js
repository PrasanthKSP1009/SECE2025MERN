// ES6 => ECMA Script Standard 6
// 1. variable declarations -> refer variables.js

// 2. Scope
// var - Global Scope
// let - Local/Block Scope
// const - Global Scope

// var a = 10
// const con = 3.14
// console.log(a)
// console.log(con)
// {
//     a = 20
//     let b = 30
//     console.log(a);
//     console.log(b);
// }
// console.log(a)
// console.log(con)
// console.log(b)

// 3. Class and objects

// class ClassEg{
//     constructor(){
//         this.a = 10
//     }
//     // 4. Arrow Functions
//     funInClass = () => {
//         console.log(this.a);
//     }
// }
// obj = new ClassEg()
// obj.funInClass()

// 5. ternary operator
// a = 11
// console.log((a%2==0)?"Even":"Odd");

// 6. Spead Operator
// a = [10,20,30,40]
// b = [50,60,70]
// c = [...b,...a]
// console.log(c);

// 7. rest operator[...]
// function restOpEg(a,b,...arg){
//     console.log(a)
//     console.log(b)
//     console.log(arg)
// }
// restOpEg(10,20,30,40,50,...b)

// 8. Destructing Operator
// var array = [10,20,30]
// var [a,b,c,d] = array
// console.log(a,b,c,d);

// 9. Hoisting
// 1. Variable Hoisting
// console.log(a);
// var a = 10;
// console.log(b);
// let b = 10;
// console.log(c);
// const c = 10;

// 2. Function Hoisting
// console.log(fun());
// function fun(){
//     return 10
// }
// console.log(fun1());
// function fun1(){
//     return 10
// }