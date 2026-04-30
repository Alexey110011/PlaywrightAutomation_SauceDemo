//1
let myArray = ['first', 'second', 'third', 'fourth', 'fifth']

//2
console.log("Task 3.2", myArray.length)

//3
console.log("Task 3.3a", myArray[0])                                        //first
console.log("Task 3.3b", myArray[myArray.length-1])                         //fifth
console.log("Task 3.3c", myArray[myArray.length-2])                         //fourth
console.log("Task 3.3d", myArray[Math.floor(Math.random()*myArray.length)]) //any of myArray

//4
myArray.unshift('helicopter')
console.log("Task 3.4", myArray[0])                                       //helicopter


//5
myArray.push('butterfly')
console.log("Task 3.5", myArray[myArray.length-1])                        //butterfly

//6
myArray.pop()
console.log("Task 3.6", myArray[myArray.length-1])                        //fifth

//7
myArray.shift()
console.log("Task 3.7", myArray[0])

//8
let newArray = myArray
console.log("Task 3.8a",'newArray', newArray)      // ['first', 'second', 'third', 'fourth', 'fifth']
console.log("Task 3.8b",'myArray', myArray)        // ['first', 'second', 'third', 'fourth', 'fifth']
console.log("Task 3.8c", newArray === myArray)      // true


//9
let anyStr = "qwerty"
let anyNum = 7
console.log("Task 3.9"," isArray anyStr", Array.isArray(anyStr))     //false   
console.log("Task 3.9"," isArray anyNum", Array.isArray(anyNum))     //false

//10
let arrFirst = myArray[0]
let arrSecond = myArray[1]
let arrThird = myArray[2]
let arrFourth = myArray[3]
let arrFifth = myArray[4]

console.log("Task 3.10","myArray",myArray)
console.log("Task 3.10"," variables", arrFirst, arrSecond, arrThird, arrFourth, arrFifth)

//11
let wisdom = ["Veni", "Vedi", "Vici"]
let mergedArray = myArray.concat(wisdom)
console.log(myArray)
console.log(wisdom)
console.log("Task 3.11","mergedArray", mergedArray)

//12
let arrToStr = wisdom.join(' ')
console.log("Task 3.12", arrToStr)    

//13
export const twoDimArr = [myArray, wisdom, newArray]
console.log("Task 3.13 array", twoDimArr)                   

let arrElement = twoDimArr[1][2]
console.log("Task 3.13 element", arrElement)                   // Vici

//14
let multiDimArr = [myArray, wisdom, twoDimArr]
console.log("Task 3.14 array", multiDimArr)  

let arrElement1 = multiDimArr[2][1][2]
console.log("Task 3.14 element", arrElement1)                                       //Vici