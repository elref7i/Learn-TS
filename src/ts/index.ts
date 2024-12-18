// *[1] Built-in Types =>String ,number ,Boolean , null , undefined :

let userName: string = 'refai';

userName = 'ahmed refai';

let age: number = 21;
age = 22;

let checked: boolean = false;
checked = true;

let data: null = null;

let x: undefined;

//*[2]  User Defined Types ==> Array , Unions :

let empty: [] = [];

let frinds: string[] = ['ahmed', 'khaled', 'refai'];

let numbers: number[] = [10, 20, 30, 40, 50];

let employee: (number | string)[] = [22, 'Ahmed Khaled'];

let userAge: number | string = 10;
userAge = 'ten';

//*[3]  User Defined Types - Tuples :

///!   لازم ترتيب -لازم تعمل شكل معين وعدد معين

//^ >===> ["corlla","Toyota",500000]

const car: readonly [string, string, number] = ['corlla', 'Toyota', 500000];

//! Hint 📌

//& ====> readonly ==> Not Change
// car.push(true); // *==> error (Boolean)

// car.push(10);
// console.log(car); // ~==> OutPut =>  ['corlla', 'Toyota', 500000, 10]

//! Error ❌
// const car2: [string, string, number] = ['corlla', 'Toyota'];

//*[4] UnderStanding Type Aliases : اسم مستعار

type mix = (string | number | boolean)[]; //*  <=== Aliases

const arr: mix = ['refai', 22, false];
const arr2: mix = ['ahmed', 21, true];

type returnValue = 1 | -1;

Array.prototype.FindElement = function (ele): returnValue {
  return 1;
};
