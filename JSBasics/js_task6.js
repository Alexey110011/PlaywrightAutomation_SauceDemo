//1. Дана строка 'js'. Сделайте из нее строку 'JS'.
let myStr1 = 'js'
console.log(myStr1.toUpperCase())

// 2. Дана строка 'JS'. Сделайте из нее строку 'js'.
let myStr2 = 'JS'
console.log(myStr1.toLowerCase())

// 3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let myStr3 = "я учу JavaScript"
console.log(myStr2.length)

// 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами
//  (через substr, substring, slice).
let myStr4 = "я учу JavaScript"
console.log(myStr4.substr(0,1))
console.log(myStr4.substring(0,1))
console.log(myStr4.slice(0,1))

// 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
let myStr5 = "я учу JavaScript"
console.log(myStr5.indexOf('учу'))

// 6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу:
//  если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов 
// строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
let myLongString = "Lorem ipsum ditum argum"
function cutLongString(n, str){
    let result = (str.length>n)?
                  str.replace(str.substr(n+1),'...'):
                  str;
    console.log("Result", result)
}
cutLongString(7, myLongString)
cutLongString(27, myLongString)
// 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let myStr7 = "Я-учу-JavaScript"
console.log(myStr7.replace(/-/g,'!'))

// 8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let myStr8 = "я учу JavaScript!"
let arrFromStr1 = myStr8.split(' ')
console.log(arrFromStr1)

// 9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let myStr9 = "я учу JavaScript!"
let arrFromStr2 = myStr9.split('')
console.log(arrFromStr2)

// 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
let myDateStr = "2025-12-31"
console.log(myDateStr.split('-').reverse().join().replace(/,/g,'.'))

// 11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
let myStrArray = ['я', 'учу', 'javascript', '!']
console.log(myStrArray.join('+'))

// 12. Преобразуйте первую букву строки в верхний регистр.
let myStr12 = "я учу JavaScript!"
console.log(myStr12.charAt(0).toUpperCase() + myStr12.substring(1))

// 13. Преобразуйте первую букву каждого слова строки в верхний регистр.

let myStr13 = "я учу JavaScript!"
let myUpperFirstArray= myStr13.split(' ')
                              .map((word)=>word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
                              .join(' ')
console.log(myUpperFirstArray)
// 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

function myConcatUpperFunc(str){
    let concatUpperStr = str.split('-')
                            .map((word)=>word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
                            .join('')
    console.log(concatUpperStr)
}
myConcatUpperFunc('my-conc-string')

// 15.Добавьте в массив четыре объекта, состоящие из полей “name”, “surname”, “age”, “job”. Значения полей произвольны. 
// При помощи шаблона строк создать строку вида: “(age:60)-years (name: Philip)  (surname: Kirkorov) is working as a (job: king of remakes)”. 
// Использовать значения из МАССИВА: age - второго объекта,  name - первого объекта, job -случайного объекта,  surname - четвертого объекта.

let myObj = [
    {
        name:'John',
        surname:'Johnson',
        age:40,
        job: 'singer'
    },
    {
        name:'Bill',
        surname:'Benson',
        age:20,
        job: 'worker'
    },
    {
        name:'Jack',
        surname:'Jackson',
        age:18,
        job: 'actor'
    },
    {
        name:'Jeff',
        surname:'Jeffson',
        age:60,
        job: 'teacher'
    },
]

function createInfo(arr){
    console.log(`(age:${arr[1].age})-years (name: ${arr[0].name}) (surname: ${arr[Math.floor(Math.random()*arr.length)].surname}) is working as ${arr[3].job}`)
}

createInfo(myObj)