// 1.Представьте, что завтра Новый год. Напишите функцию, которая будет считать оставшееся 
// время до нового года в секундах.

function timeTillCelebrate(){
    const newYear = new Date("January 01, 2027")
    const newYearSeconds = Math.round(newYear.getTime()/1000,0)
    const now = new Date()
    const nowSeconds = Math.round(now.getTime()/1000,0)
    let diff = newYearSeconds - nowSeconds
    console.log("Till New Year", diff, 'sec.')
}

 setInterval(()=>{
    timeTillCelebrate()
 },1000)

// 2.Напишите функцию, которая принимает входным параметром дату Вашего рождения, считает и
//  выводит на консоль количество прожитых Вами суток.

function countDays(){
    let userInput = prompt( 'Enter Your birth date in format DD.MM.YYYY or DD/MM/YYYY')
   
    // Transform 'DD.MM.YYYY' or 'DD/MM/YYYY' to 'YYYY-MM-DD' format for further processing
    let userInputDate = userInput.split(/[/.]/).reverse().join('-')

    // Check whether tranformed user' input matches regex 'YYYY-MM-DD'
    const regexDate = /^(\d{4})(-)(\d{2})(-)(\d{2})$/

    if (!regexDate.test(userInputDate)){
        alert("Wrong date format")
        return
    } 
    console.log(true)
    // Set normalized date to Date constructor.
    const jsDateFormat = new Date(userInputDate)
    
    // Get number of seconds 
    const dateSeconds = Math.round(jsDateFormat.getTime()/1000,0)

    // Get number of seconds for current date
    const now = new Date()
    const nowSeconds = Math.round(now.getTime()/1000,0)

    // Difference between now and user's date birht in seconds/minutes/hours/ = days
    const days = Math.round((nowSeconds - dateSeconds)/60/60/24,0)
    console.log("In days", days, 'days')
}

 countDays()

// 3.Напишите функцию с try…catch…finally в которой:.

function tryOrCatch(day){
    try {
        if (day>31){
            throw new RangeError("Day cannot exceed 31")
        }
        console.log("Day", day)
    }
    catch(err) {
        console.log(err.name, err.message)
    }
    finally {
        console.log ("Done.")
    }
}

// 	а. Выполнится блок catch  и на консоль будет выведено название ошибки.

tryOrCatch(32)

// 	b. Выполнится блок  try.

tryOrCatch(30)