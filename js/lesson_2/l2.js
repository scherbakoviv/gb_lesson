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

function checkXY(x, y) {
    if (x >= 0 && y >= 0) {
        return x - y;
    }
    
    if (x < 0 && y < 0) {
        return x * y;
    }
    
    return x + y;
}

console.log(checkXY(1, 2) + ' = -1');
console.log(checkXY(0, 2) + ' = -2');
console.log(checkXY(0, 0) + ' = 0');
console.log(checkXY(1, 0) + ' = 1');
console.log(checkXY(1, -0) + ' = 1');
console.log(checkXY(-0, -0) + ' = 0');
console.log(checkXY(-1, -2) + ' = 2');
console.log(checkXY(-0, -2) + ' = -2');
console.log(checkXY(-1, -0) + ' = -1');
console.log(checkXY(0, -0) + ' = 0');
console.log(checkXY(1, -2) + ' = -1');
console.log(checkXY(-1, 2) + ' = 1');

// 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
//     Обязательно использовать оператор return.
function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function div(x, y) {
    return x / y;
}

function mul(x, y) {
    return x * y;
}

// 5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
//     операций
//     (использовать функции из задания 4) и вернуть полученное значение.

function mathOperation(x, y, operation) {
    switch (operation) {
        case '+':
            return sum(x, y);
        case '-':
            return sum(x, y);
        case '/':
            return div(x, y);
        case '*':
            return mul(x, y);
        default:
            return NaN;
    }
}

// 6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало
//     обычных заданий, требует времени и возможно гугления, делайте по желанию.)
//     Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
//     положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
//         "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
//     "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
//     "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
//     То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
//     числа.
//         Подсказки, что я использовал (ваш подход может отличаться):
//     1) В javascript нет функции, которая возвращает последнюю цифру, но зато мы можем
//     получить последний символ из строки достаточно просто.
//     2) Я использовал String() для приведения к строке
//     https://codepen.io/IgorKubikov/pen/qQmoJJ?editors=0011
//         3) Узнать длину строки https://codepen.io/IgorKubikov/pen/vQmRbq?editors=0011
//         Подробнее можно почитать здесь
//     https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
//         4) Чтобы получить конкретный символ в строке я использовал это
//     https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
//         5) Я также использовал switch, а конкретно нам нужно будет одно действие для нескольких
//         case (т.е. если у нас 500 рублей, 47 рублей, 99 рублей и т.д. – у нас для нескольких цифр на
//             конце одно слово «рублей»). Это можно посмотреть здесь:
//             https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch#Methods
//                 _for_Multi-criteria_Case

function rubToString(money) {
    let mod = money % 10;
    let val;
    //Ваша сумма в 101 рубль успешно зачислена.
    switch (true) {
        case money > 10 && money < 20:
            val = money + " рублей";
            break;
        case mod > 1 && mod < 5:
            val = money + " рубля";
            break;
        case mod === 1:
            val = money + " рубль"
            break;
        default:
            val = money + " рублей"
    }
    return val
}
console.log(rubToString(0))
console.log(rubToString(1))
console.log(rubToString(4))
console.log(rubToString(5))
console.log(rubToString(8))
console.log(rubToString(10))
console.log(rubToString(11))
console.log(rubToString(15))
console.log(rubToString(19))
console.log(rubToString(20))
console.log(rubToString(21))
console.log(rubToString(24))
console.log(rubToString(25))
console.log(rubToString(29))
console.log(rubToString(30))
console.log(rubToString(51))
console.log(rubToString(55))
console.log(rubToString(110))
console.log(rubToString(1102034))
money = prompt('Сколько денег положить на счёт');
alert("Ваша сумма в "+rubToString(money)+" успешно зачислена.")
