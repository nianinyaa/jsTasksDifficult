let title;
let screens;
let screenPrice;
let adaptive;

let service1;
let service2;
let rollbackPercent = 15;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num) // !!очень универсальная проверка на число
}


const asking = function (){
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

    // screenPrice = prompt("Сколько будет стоить данная работа?");
    // while(!isNumber(screenPrice)){
    //     screenPrice = prompt("Сколько будет стоить данная работа?");
    // }

     do{
        screenPrice = prompt("Сколько будет стоить данная работа?");
     }
     while(!isNumber(screenPrice) || !screenPrice);

     screenPrice = parseFloat(screenPrice.trim());

    adaptive = prompt("Нужен ли адаптив на сайте?");
}


const getAllServicePrices = function(){
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        }else if (i === 1){
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

    let price;
    do{
       price = prompt("Сколько это будет стоить?")
    } while (!isNumber(price));

        sum += parseFloat(price);
       }
       return sum
    };


function getFullPrice(screenPrice, allServicePrices){
    return screenPrice + allServicePrices;
}

const getTitle = function(title){
    if (!title) return "";
    const trimmedTitle = title.trim();
    return trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase();
} 



const getServicePercentPrices = function (fullPrice, rollbackPercent){
    const rollbackSum = fullPrice * (rollbackPercent/100);
    return Math.round(fullPrice - rollbackSum)};

 function getRollbackMessage(fullPrice){

 if (fullPrice > 30000){
     console.log("Даем скидку в 10%");
 }
 else if(fullPrice > 15000 && fullPrice <= 30000){
     console.log("Даем скидку в 5%");
 }

else if (fullPrice <= 15000 && fullPrice >= 0){
    console.log("Скидка не предусмотрена");
}

else{
    console.log("Что то пошло не так");
}
}


 function showTypeOf(variable) {
     console.log(typeof variable);
 }



asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(parseFloat(screenPrice), allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollbackPercent);
title = getTitle(title);



showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log("Типы экранов для разработки:", screens);
console.log (getRollbackMessage(fullPrice));
console.log(typeof title);

//console.log("Стоимость за вычетом отката:", servicePercentPrice)