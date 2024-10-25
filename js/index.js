// Symbol ga oid.

// let id = Symbol();

// let user = {
//   name: "John",
//   age: 35,
//   [id]: 28793,
// };

// let res1 = Object.keys(user);
// let res2 = Object.getOwnPropertySymbols(user);
// let res3 = user[res2[0]];
// console.log(res1);
// console.log(res2);
// console.log(res3);

// Rekursiv funksiyaga oid

// 1-masala

// function numSum(arg) {
//   if (arg == 1) {
//     return 1;
//   }

//   return arg + numSum(arg - 1);
// }

// console.log(numSum(5));

// 2-masala

// function factorial(arg) {
//   if (arg == 1) {
//     return 1;
//   }
//   return arg * factorial(arg - 1);
// }

// console.log(factorial(5));

// 3-masala

// function fibonachi(arg) {
//   if (arg === 0) {
//     return 0;
//   }
//   if (arg === 1) {
//     return 1;
//   }
//   return fibonachi(arg - 1) + fibonachi(arg - 2);
// }

// console.log(fibonachi(5));

// Class ga oid.

// 1-masala

// class Car {
//   constructor(name, color, year) {
//     this.name = name;
//     this.color = color;
//     this.year = year;
//   }
// }

// let bmw = new Car("Bmw", "Black", 2023);

// console.log(bmw);

// 2-masala

// class Rectangle {
//   constructor(uzunlik, kenglik) {
//     this.uzunlik = uzunlik;
//     this.kenglik = kenglik;
//   }
//   getArea() {
//     return this.uzunlik * this.kenglik;
//   }
// }

// let rectangle = new Rectangle(5, 7);
// let res = rectangle.getArea();
// console.log(res);

// ### 1. `charAt`

// 1-masala

// let str = "hello world";
// console.log(str.charAt(2));

// 2-masala

// let str = "hello world";
// console.log(str.charAt(str.length - 1));

// 3-masala

// let str = "hello world";
// for (let i = 0; i <= str.length; i++) {
//   console.log(str.charAt(i));
// }

// ### 2. `charCodeAt`

// 1-masala

// let str = "hello";
// console.log(str.charCodeAt(4));

// 2-masala

// let str = "hello";
// let res = [];

// for (let i = 0; i < str.length; i++) {
//   res.push(str.charCodeAt(i));
// }
// console.log(res);

// 3-masala

// let str = "javascript";
// index = 4;

// for (let i = index + 1; i <= index + 3 && i < str.length; i++) {
//   console.log(str.charCodeAt(i));
// }

// ### 3. `at`

// 1-masala

// let str = "hello world";
// console.log(str.at(4));

// 2-masala

// let str = "hello world";
// console.log(str.at(str.length - 1));

// 3-masala

// let str = "hello world";
// console.log(str.at(-3));

// ### 4. `slice`

// 1-masala

// let str = "hello world";
// console.log(str.slice(3, 8));

// 2-masala

// let str = "hello";
// console.log(str.slice(0, 3));

// 3-masala

// let str = "hello world";
// console.log(str.slice(-5));

// ### 5. `substring`

// 1-masala

// let str = "hello world";
// console.log(str.substring(2, 9));

// 2-masala

// let str = "hello";
// console.log(str.substring(0, 4));

// 3-masala

// let str = "hello world";
// console.log(str.substring(4));

// ### 6. `substr`

// 1-masala

// let str = "javascript";
// console.log(str.substr(3, 3));

// 2-masala

// let str = "javascript";
// let res = Math.trunc(str.length / 2);
// console.log(str.substr(res, 5));

// 3-masala

// let str = "javascript";
// console.log(str.substr(-4));

// ### 7. `trim`, `trimStart`, `trimEnd`

// 1-masala

// let str = prompt("Nimadur kiriting:");
// console.log(str.trim());

// 2-masala

// let str = "   hello";
// console.log(str.trimStart());

// 3-masala

// let str = "hello   ";
// console.log(str.trimEnd());

// ### 8. `padEnd`, `padStart`

// 1-masala

// let str = "hello";
// console.log(str.padEnd(10, "!"));

// 2-masala

// let str = "javascript";
// console.log(str.padStart(15, "$"));

// 3-masala

// let str = "12345";
// console.log(str.padStart(8, "0"));

// ### 9. `repeat`

// 1-masala

// let str = "hello ";
// console.log(str.repeat(3));

// 2-masala

// let str = "hello";
// let res = "";
// for (let i = 0; i < str.length; i++) {
//   res += str[i].repeat(2);
// }

// console.log(res);

// 3-masala

// let str = "hello";
// let res = (str + ", ").repeat(5).slice(0, -2);
// console.log(res);

// ### 10. `replace`

// 1-masala

// let str = "hello world";
// console.log(str.replace("h", "H"));

// 2-masala

// let str = "hello world";
// console.log(str.replace("world", "javascript"));

// 3-masala

// let str = "raqam 51312";
// console.log(str.replace(5, "*"));

// ### 11. `replaceAll`

// 1-masala

// let str = "javascript";
// console.log(str.replaceAll("a", "o"));

// 2-masala

// let str = "salom Alisher, salom Alisher";
// console.log(str.replaceAll("Alisher", "Begzod"));

// 3-masala

// let str = prompt("son kiriting:");

// for (let i = 0; i <= 9; i++) {
//   str = str.replaceAll(i.toString(), "*");
// }

// console.log(str);

// ### 12. `split`

// 1-masala

// let str = "hello world";
// console.log(str.split(" "));

// 2-masala

// let str = "hello wolrd";
// console.log(str.split(""));

// 3-masala

// let str = "hello world and javasript";
// console.log(str.split(" "));

// ### 13. `indexOf

// 1-masala

// let str = "hello";
// console.log(str.indexOf("l"));

// 2-masala

// let str = "hello world";
// console.log(str.indexOf("world"));

// 3-masala

// let str = "hello world";
// console.log(str.indexOf("o"));

// ### 14. `lastIndexOf`

// 1-masala

// let str = "hello world";
// console.log(str.lastIndexOf("o"));

// 2-masala

// let str = "apple and cherry";
// console.log(str.lastIndexOf(" "));

// 3-masala

// let str = "54125";
// console.log(str.lastIndexOf(5));

// ### 15. `includes`

// 1-masala

// let str = "hello world";
// console.log(str.includes("world"));

// 2-masala

// let str = prompt("String kiriting:");
// let isExits = false;

// for (let i = 0; i <= str.length; i++) {
//   if (str.includes(i.toString())) {
//     isExits = true;
//    break;
//   }
// }

// isExits ? console.log("raqam mavjud") : console.log("raqam mavjud emas");

// 3-masala
// let str = prompt("String kiriting:");
// let bigLetters = "abcdefghijklmnopqrstuvwxyz";
// let smallLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let isExits = false;

// for (let i = 0; i < str.length; i++) {
//   if (str.includes(bigLetters[i]) || str.includes(smallLetters[i])) {
//     isExits = true;
//     break;
//   }
// }

// isExits ? console.log("harf mavjud") : console.log("harf mavjud emas");
