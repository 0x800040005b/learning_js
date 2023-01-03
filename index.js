"use strict"

const options = {
    name: 'test',
    width: 1024,
    height: 768,
    colors: {
        bg: 'red',
        border: 'black',
        test: {
            man: 'jora',
        }
    }
}

/*
console.log(options.name)
*/


// delete options.name

// console.log(options)

/*
for (let option in options){
    console.log(options)
}
*/

/*
function printObject(object){
    for (let key in object){
        if(typeof object[key] === "object"){
            console.log(`${key}:`)
            printObject(object[key])
        }else{
            console.log("\t" + `${key} => ${object[key]}`)

        }
    }
}

printObject(options)
*/

Object.keys(options);

