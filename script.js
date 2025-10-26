const userInput = prompt("Введите значение.");


const greeting = function(value){
    if (typeof value !== "string"){
        console.log("Это не строка!");
        return;
    }
    const trimmedValue = value.trim();
    
    if (trimmedValue.length > 30){
        return trimmedValue.slice(0, 30) + "...";
    }
    return trimmedValue;
};

const result = greeting(userInput);

console.log(`Результат: "${result}"`);