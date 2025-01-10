// Primitive Datatypes

// a = "SECE"
// console.log(a)
// b = true
// console.log(b)

// Checking the type of variable
// console.log(typeof(a))

//Secondary Datatypes(Object)
//Array Object
// array = ['a',10,true,[20,30],"Sri Eshwar"]
// console.log(array)
// console.log(typeof(array))

// Object

//1st way of declaring object
// obj = {
//     firstname:"Sri",
//     lastname:"Eshwar"
// }
// console.log(obj)
// console.log(typeof(obj))
// console.log(obj.firstname)
// console.log(obj["lastname"]);

//2nd way of declaring object
// obj1 = {}
// console.log(obj1)
// obj1["dept"] = "CSE"
// obj1['sec'] = "A"
// console.log(obj1)

//3rd way of declaring object

obj2 = new Object()
console.log(obj2);
obj2.count = 70
obj2.abs = 1
totalPresentCount = obj2.count - obj2.abs
console.log("Present", totalPresentCount)
console.log(obj2)

// Set
// set = new Set(["hello",1,2,"SECE","44",2,"hello","SECE",5])
// console.log(typeof(set))
// console.log(set);
// set.add("qwerty keyboard")
// console.log(set);
