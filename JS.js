const getSleepHours = day => {
    switch (day) {
        case ("monday") :
            return 8;
        case "tuesday" :
            return 6;
        case "wednesday" :
            return 8;
        case "thursday" :
            return 5;
        case "friday" :
            return 7; 
        case "saturday" :
            return 9; 
        case "sunday" :
            return 4;  
        default:
            break;
    }
}


const getActualSleepHours = () => {
    return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
}
console.log(getActualSleepHours());

/*const getActualSleepHours = () => {
    return 8 + 6 + 8 + 5 + 7 + 9 + 4;
}
console.log(getActualSleepHours()); 

                                             -- punctul 12
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours *= 7;
}
console.log(getIdealSleepHours());*/


const getIdealSleepHours = hours => {
    return hours *= 7;
}
console.log(getIdealSleepHours(10));


const calculateSleepDebt = (user) => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(10);
    if (actualSleepHours === idealSleepHours) {
        console.log(`${user}, you got the perfect amount of sleep.`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`${user}, you got more sleep than needed.`);
    } else if (actualSleepHours < idealSleepHours) { 
        console.log(`${user}, you should get some rest.`);
    } 
}
calculateSleepDebt("Lucia");