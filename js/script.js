'use strict';

let a = {};
let b = {};
// Task #1
let result1 = a === 0 ? console.log('Верно') : console.log('Неверно');
// Task #2
let result2 = a > 0 ? console.log('Верно') : console.log('Неверно');
// Task #3
let result3 = a < 0 ? console.log('Верно') : console.log('Неверно');
// Task #4
let result4 = a >= 0 ? console.log('Верно') : console.log('Неверно');
// Task #5
let result5 = a <= 0 ? console.log('Верно') : console.log('Неверно');
// Task #6
let result6 = a !== 0 ? console.log('Верно') : console.log('Неверно');
// Task #7
let result7 = a === 'test' ? console.log('Верно') : console.log('Неверно');
// Task #8
let result8 = a === '1' ? console.log('Верно') : console.log('Неверно');
// Task #9
let result9 = a > 0 && a < 5 ? console.log('Верно') : console.log('Неверно');
// Task #110
switch (a) {
    case 0:
    case 2:
        console.log( a +7 );
        break;
    default:
        console.log( a / 10);
}
// Task #11
let result11 = a <= 1 && b >= 3 ? console.log( a + b ) : console.log( a - b );
// Task #12
let result12 = a > 2 && a < 11 || b >= 6 && b < 14 ? console.log('Верно') : console.log('Неверно');
// Task #13
let num = 1;

switch (num) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Весна');
        break;
    case 3:
        console.log('Лето');
        break;
    case 4:
        console.log('Осень');
        break;
    default:
        console.log('Ошибка');
}