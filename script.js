const num = 266219;
const split = num.toString().split('');
console.log(split);

let result = 1;
for(let i = 0; i < split.length; i++) { 
    result *= split[i]
}
    console.log(result);

const increased = (result**3);
console.log(increased);

const fin = increased.toString().slice(0,2);
console.log(fin);




