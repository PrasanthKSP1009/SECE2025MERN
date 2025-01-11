// Promise

// function promiseEg(flag){
//     return new Promise(function(resolve,reject){
//         if (flag === 1){
//             resolve("This is a Promise resolve Example")
//         }
//         else if(flag === 0){
//             reject("This is Promise reject Example")
//         }
//     })
// }
// promiseEg(0).then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })

// Promise - Location Finder Example
// Pass 2 things - Melboune, 2000


locationFinder = (location,time) =>{
    return new Promise((locFound, locNotFound)=>{
        setTimeout(()=>{
            if(isLocationValid(location,time)){
                locFound([location, "Found in", 2000, "millisecs"])
            }
            else{
                locNotFound([location, "not found in", 2000, "millisecs"])
            }
        },time)
    })
}
function isLocationValid(loc,time){
    location = "Melbourne"
    t = 2000
    if (loc === location && time <= t){
        return true
    }
    else{
        return false
    }
}
locationFinder("Melbourne",2001).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err)
});