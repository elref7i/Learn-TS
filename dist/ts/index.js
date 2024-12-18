"use strict";
// * Built-in Types =>String ,number ,Boolean , null , undefined
let userName = 'refai';
userName = 'ahmed refai';
let age = 21;
age = 22;
let checked = false;
checked = true;
let data = null;
let x;
//* User Defined Types ==> Array , Unions
let empty = [];
let frinds = ['ahmed', 'khaled', 'refai'];
let numbers = [10, 20, 30, 40, 50];
let employee = [22, 'Ahmed Khaled'];
let userAge = 10;
userAge = 'ten';
//* User Defined Types - Tuples
///!   لازم ترتيب -لازم تعمل شكل معين وعدد معين
//^ >===> ["corlla","Toyota",500000]
const car = ['corlla', 'Toyota', 500000];
//* Hint 📌
//& ====> readonly ==> Not Change
// car.push(true); // *==> error (Boolean)
// car.push(10);
// console.log(car); // ~==> OutPut =>  ['corlla', 'Toyota', 500000, 10]
//! Error ❌
// const car2: [string, string, number] = ['corlla', 'Toyota'];
//# sourceMappingURL=index.js.map