// 1.Создайте пустую коллекцию Set. С помощью метода add добавьте в нее элементы со значениями 1, 2 и 3.
let mySet1 = new Set()

mySet1.add(1)
mySet1.add(2)
mySet1.add(3)
console.log(mySet1)

// 2.Создайте коллекцию Set с начальными значениями 1,2,3. С помощью свойства size выведите на экран 
// количество элементов в коллекции.
let mySet2 = new Set([1,2,3])

console.log(mySet2.size)

// 3.Создайте коллекцию Set с начальными значениями 1,2,3. С помощью метода has проверьте наличие 
// элемента со значением 3, а затем элемента со значением 4.

let mySet3 = new Set([1,2,3])

console.log(mySet3.has(3))
console.log(mySet3.has(4))

// 4.Создайте коллекцию Set с начальными значениями 1,2,3. С помощью метода add добавьте в коллекцию еще одно число 2. 
// Выведите содержимое коллекции в консоль, убедитесь, что число 2 не добавилось второй раз.

let mySet4 = new Set([1,2,3])

mySet4.add(2)
console.log(mySet4)

// 5.Дан массив с числами. С помощью цикла и метода add добавьте все элементы этого массива в коллекцию Set.

let myArr = [20, 15, 25, 74]

let mySet5 = new Set()

for (let num of myArr){
    mySet5.add(num)
}
console.log(mySet5)

// 6.Модифицируйте предыдущую задачу так, чтобы в коллекцию добавлялись только четные числа из массива, а 
// нечетные - игнорировались.

let myArr1 = [20, 15, 25, 74]

let mySet6 = new Set()

for (let num of myArr){
     if(num%2 == 0){
        mySet6.add(num)
    }
}
console.log(mySet6)

// 7.Дана коллекция Set со значениями 1,2,3. С помощью цикла for-of переберите ее значения и выведите в консоль.

let mySet7 = new Set([1,2,3])

for (let num of mySet7){
    console.log(num)
}

// 8.Заполнить коллекцию Set десятью уникальными случайными числовыми значениями от 0 до 100. 
// Найдите сумму этих значений.

let mySet8 = new Set()

for (let i =0; i<10; i++){
    mySet8.add(Math.floor(Math.random()*100))
}
console.log(mySet8)

// 9.Пусть дан массив. С помощью Set получите этот же массив, но без дублей.

let myArr2 = [15,20,16,15,21,20]

let mySet9 = new Set(myArr2)

console.log(mySet9)

// 10. Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, 
// а значениями - какие-нибудь строки.

let myArr10_1 = ['a','b','c','d']
let myArr10_2 = [1,2,3,4]
let myArr10_3 = [true, false]

let myMap10 = new Map()
myMap10.set(myArr10_1, 'ten first')
myMap10.set(myArr10_2, 'ten second')
myMap10.set(myArr10_3, 'ten third')

console.log(myMap10)

// 11.Переберите циклом for-of коллекцию, созданную в предыдущей задаче.

for (let item of myMap10){
    console.log(item)
}

// 12.Пусть дана коллекция Map. С помощью метода keys получите массив ее ключей и переберите его циклом for-of.

for (let itemKey of myMap10.keys()){
    console.log(itemKey)
}

// 13.Пусть дана коллекция Map. С помощью метода values получите массив ее значений и переберите его циклом for-of.

for (let itemValue of myMap10.values()){
    console.log(itemValue)
}

// 14.Пусть дана коллекция Map. С помощью свойства size узнайте количество элементов в этой коллекции.

console.log(myMap10.size)
