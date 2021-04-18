// 1. Написать функцию, которая проверяет, являются ли два слова анаграммами. (Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")
//     Регистр букв не имеет значения. 

function anagram(first, second) {
    return second.toLowerCase().split('').sort().join()
        === first.toLowerCase().split('').sort().join();
}

const an1 = anagram('listen', 'silent'); 
const an2 = anagram('one', 'two');

console.log(an1);
console.log(an2)

// 2. Написать функцию, которая подсчитывает количество гласных в строке.

const str = "Success is the ability to go from failure to failure without losing your enthusiasm";
const letters = 'aouie';

function countLetters(string){
    let symbol = 0;
    for(const letter of string) {
        if(letters.search(letter) !== -1){ 
            symbol++;
        }
    }
    return symbol;
}

const symbolValue = countLetters(str);
console.log(symbolValue);


// 3. Написать функцию, которая принимает массив с числами и возвращает новый массив, который содержит отрицательные числа из первого массива.
const arr = [1, 3, -45, 20, -5, -8, 78, 99];

function arrFilter(array){
    return array.filter((sortArr) => sortArr < 0);
}

const arrFilterValue = arrFilter(arr);
console.log(arrFilterValue)

// 4. Написать функцию, которая принимает массив и возвращает новый массив, состоящий только из уникальных значений первого массива (значения не должны повторяться).

const myArr = [1, 2, 3, 2, 4, 2, 5, 2, 6, 2];

function unique(newArr){
    return [...new Set(newArr)];
}

const uniqueArr = unique(myArr);
console.log(uniqueArr);

