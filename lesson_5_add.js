const arr = [
    "234",
    "35721",
    "4567",
    "8790331",
    "234224",
    "9878951",
    "25653"
];

const newArr = arr.filter(num => typeof num === 'string' && (num.startsWith("2") || (num.startsWith("4")))
);


console.log ('Простые числа от 1 до 100');

for(let num = 2; num <= 100; num++){
    let isPrimeNum = true;

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrimeNum = false;
            break;
        }
       
    }

    if(isPrimeNum === true){
        console.log ("Простое число: " + num + ". Делители этого числа: 1 и " + num);
    }

}

// Вариант с массивом

 let primes = [];


for(let num = 2; num <= 100; num++){
    let isPrime = true;

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        primes.push(num);
    }

}
primes.forEach(function(num) {
    console.log("Простое число: " + num + ". Делители: 1 и " + num);
});
