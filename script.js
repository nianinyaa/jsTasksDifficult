// let lang = prompt('Введите язык');

// if(lang == 'ru'){
//     console.log(
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
    "Пятница",
    "Суббота",
    'Воскресенье');
}

else if(lang == 'en'){
    console.log(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday")
}
 
switch(lang){
    case "ru": console.log(
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье");
        break;

    case "en": console.log(
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday");
        break;
}


const lang = prompt("Введите язык");

const days = { 
    'ru': 
    ["Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье";]

    'en':
        ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday";
        ]
}

const weekDays = days[lang] || []

(weekDays.forEach(day => console.log(day)))

const namePerson = prompt("Write your name");
const status = namePerson === "Артем" ? "директор" : 
namePerson === "Александр" ? "преподаватель" : 
"студент";

console.log(status);