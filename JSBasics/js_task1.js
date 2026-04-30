const name = "Liashkovich Aliaksei"
const birthyear = 1978
let result = name + birthyear
console.log(result) //Liashkovich Aliaksei1978

let result1 = result - birthyear
console.log("Result1", result1) //NaN

let a = 2, b = 5, c, d
console.log("Task 1.2 before",a,b,c)  //2, 5, undefined

c = ++a*2 + b++
//c = 3*2 + 5; b = 6
console.log("Task 1.2 a,b,c after", a,b,c)  //3, 6, 11

d = b++*b - a--
//d = 7*6 - 3
console.log("Task 1.2 a,b,c,d after", a,b,c,d) //2, 7, 11, 39

console.log("" + 0 + 0 + 7) //007    If JS sees string ("") and then sign +, it considers operation as concatenation, not adding

console.log("" - 1)        // -1     If JS sees string ("") and then sign -, it considers operation as deduction (math operation)
                           //           and consider "" as 0  

console.log(10/"2")        // 5      If JS sees string ("") and then sign /, it consider operation as division (math operation)
                           //        and consider "2" as a number 

console.log("11"*"2")      // 22     If JS sees string ("") and then sign *, but these strings can be casted to numbers, it considers
                           //        these strings as numbers

console.log(5 + 5 + "hi")  // 10hi   If JS sees numbers first and then string, it consider operation with numbers as math operation,
                           //        and then concatenates the result with following string 

console.log("hi!" + 4 + 5) // hi!45  If JS sees string first and then sign + and then numbers, it consider all the expression as a string 
                           //        and makes concatenation 

console.log("4" - 5)       // -1     If JS sees string ("4") and then sign -, and can cast string to number, it considers operation as 
                           //        deduction (math operation) and consider "4" as 4

console.log("hi!45" - 2)   // NaN    If JS sees string ("hi!45") and then sign -, and cannot cast string to number, it considers operation as 
                           //        deduction (math operation) but cannot perform deduction and return NaN

console.log(true - false)  // 1        JS consider true as 1, false as 0. and can perform deduction

console.log(true + false)  // 1        The same explanation

console.log(1/0)           // Infinity Division by 0 returns Infinity

console.log(-1/0)          // Infinity The same explanation

console.log(" 15" + 5)     //  155     If JS sees string (" 15") and then sign +, and can cast string to number, it considers operation as 
                           //          math operation (adding)

console.log(" 15 " - 5)    // 10       The same explanation (deduction) 

console.log(null + 1)      // 1        JS consider null as 0

console.log(undefined + 1)  //NaN      JS cannot cast undefined to number and returns NaN

console.log("hi" + undefined) // "hiundefined" 
                              //       If JS sees as a first elememt of expression as string, it consider all expression
                              //       as string and makes concatenation 

console.log("\t\n" - 2)    // -2      ???