// ? Task:


// Solution 1
// let multThenAdd = num => {
//    return mul => add => {
//       return num * mul + add //num*2+4 1*2+4  10*2+4
//    }
// }
// let timesTwoPlusFour = (num) => multThenAdd(num)(2)(4)// используем для передачи параметров в основную и вложенные функции.

// Solution 2
let multThenAdd = num => mul => add => num * mul + add;
let timesTwoPlusFour = num => multThenAdd(num)(2)(4)// используем для передачи параметров в основную и вложенные функции.
console.log(timesTwoPlusFour(1)); //6
console.log(timesTwoPlusFour(10)); // 24


// ! Explanation: Замыкание (англ. closure) в программировании — функция первого класса,
//  в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции в окружающем коде и не являющиеся её параметрами.Говоря другим языком, замыкание — функция,
//     которая ссылается на свободные переменные в своей области видимости
