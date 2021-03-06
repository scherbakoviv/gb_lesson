// 1 Объясните почему код даёт именно такие результаты?
//     Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в браузере со
// включенными точками остановки.
// //пример 1

let a = 1, b = 1, c, d; //[1,1,undefined,undefined]
// преинкремент, постинкремент c = ++a => a = a + 1; c = a;
c = ++a; // c = ++a => a = a + 1; c = a; a = 2; c = 2;
alert(c); // ответ: 2
//пример 2
d = b++; // d = b++ => d = b; b = b + 1; d = 1; b = 2;
alert(d); //ответ: 1
//пример 3
c = 2 + ++a; // c = 2 + ++a => a = a + 1; c = 2 + a; a = 3; c = 5;
alert(c); //ответ: 5
//пример 4
d = 2 + b++; // d = 2 + b++ => d = 2 + b; b = b + 1; d = 4; b = 3;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3

// 2 Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
// (описать последовательность действий).
a = 2;
x = 1 + (a *= 2); // x = 1 + (a *= 2) => a = a * 2; x = 5

// 3 Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения.
//     Затем написать скрипт, который работает по следующему принципу:
//     - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;

function checkXY(x, y){
    if (x >= 0 && y >= 0) {
        return x - y;
    }
    
    if (x < 0 && y < 0){
        return x * y;
    }
    
    return x + y;
}

console.log(checkXY(1,2) + " = -1");
console.log(checkXY(0,2) + " = -2");
console.log(checkXY(0,0) + " = 0");
console.log(checkXY(1,0) + " = 1");
console.log(checkXY(1,-0) + " = 1");
console.log(checkXY(-0,-0) + " = 0");
console.log(checkXY(-1,-2) + " = 2");
console.log(checkXY(-0,-2) + " = -2");
console.log(checkXY(-1,-0) + " = -1");
console.log(checkXY(0,-0) + " = 0");
console.log(checkXY(1,-2) + " = -1");
console.log(checkXY(-1,2) + " = 1");