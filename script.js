function startGame(maxAttempts=10) {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

function numberInput (){
    const userNum = prompt (`Попытка ${attempts}/${maxAttempts}. Угадай число от 1 до 100:`);

    if(attempts >= maxAttempts){
        confirm("Попытки закончились, хотите сыграть еще?");
        if(confirm){
            startGame(maxAttempts);
        }
        return;
    }
    attempts++;
    const remainingAttempts = maxAttempts - attempts;

    if(userNum === null){
        alert(`Была нажата кнопка отмены. Начните заново.`) //если нажали кнопку отмена `Попытка № попытки ${attempts}/{maxAttempts}.
        const newGame = confirm (`Хотели бы сыграть еще?`);
        if(confirm){
            startGame(maxAttempts);
        } else{
            return 
        };
        return
    };

    let num = +userNum;
    if(isNaN(num)){
        alert(`Введи число!`);
       return numberInput();
        };

    if(num === secretNumber){
        alert(`Поздравляю, Вы угадали!!!`);
        const newGame = confirm (`Хотели бы сыграть еще?`);
        if(newGame){
            confirm(`Запускаем новую игру!`);
            startGame(maxAttempts)
        }else{('Спасибо за игру!')
        };
        return;
    };

    if(num > secretNumber){
        alert(`Загаданное число меньше, осталось попыток": ${remainingAttempts}`);
        numberInput();
    };

    if(num < secretNumber){
    alert (`Загаданное число больше, осталось попыток: ${remainingAttempts}`);
    return numberInput();
    };
}
numberInput();
}
startGame(10);