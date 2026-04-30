import { twoDimArr } from "./js_task3.js" 

//1a
let start = 10
let end = 20
let count = start
console.log("Task 4.1a")
while (count<=end){
    if(count%2 != 0){
        console.log(count)
    }
    count++
}


//1b
console.log("Task 4.1b")
while (count<=end){
    if(count%2 == 0){
        console.log(count)
    }
    count++
}
console.log(4)

//1c
console.log("Task 4.1c")
let count_1 = end
while (start <= count_1){
    if(count_1%2 == 0){
        console.log(count_1)
    }
    count_1--
}


//2                                                       - never run this!
// while(true){
//     console.log("Task 4.2", "Don't worry! Be happy!")
// }

//3
while (!true){
  console.log("Task 4.3","Don't worry! Be happy!")
}

//4
do {
    console.log("Task 4.4","Print")
} while (!true)

//5
let myBigArray = new Array(10)
let counter=0
let oddNumbers = []
for (let i=0; i<myBigArray.length; i++){
    myBigArray[i] = Math.floor(Math.random()*20)
    if (myBigArray[i]%2 !== 0){
        counter += myBigArray[i]
        oddNumbers.push(myBigArray[i])
    }
}
console.log("Task 4.5", myBigArray, oddNumbers, counter)

//6
let myBigArray1 = new Array(10)
let counter1 = 0
let oddNumbers1 = []
for (let i=0; i<myBigArray1.length; i++){
    myBigArray1[i] = Math.floor(Math.random()*10)
    if (myBigArray1[i]%2 !== 0){
        oddNumbers1.push(myBigArray1[i])
        if(myBigArray1[i] == 5) continue
        counter1 += myBigArray1[i]
        if(myBigArray1[i] ==9) break
    }
}
console.log("Task 4.6", myBigArray1, oddNumbers1, counter1)

//7
console.log("Task 4.7", twoDimArr)
let entries = [['myArray'], ['wisdom'], ['newArray']]

for (let i = 0; i<twoDimArr.length; i++){
    entries.push(twoDimArr[i])
    console.log(`On index ${i} array name is ${entries[i][0]}`)
    for (let j = 0; j<twoDimArr[i].length; j++){
        console.log(`${twoDimArr[i][j]} on ${[j]} index in ${entries[i][0]}`)
    }
}
