// *[1] Built-in Types =>String ,number ,Boolean , null , undefined :

import { log } from 'console';

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

// Array.prototype.FindElement = function (ele): returnValue {
//   return 1;
// };

//*[5] Objects, interfaces and Classes - Key Differences

// ===>  Fixed schema

//~ Hint => ? ===> Optional  ==> ممكن تيجى وممكن متجيش ولو جت لازم تكون من نفس النوع

type Car = {
  name: string;
  color: string;
  price: number;
  hasAirBag: boolean;
  brances: {
    branchOne: string;
    branchTwo?: string;
  };
};
const carData: Car = {
  name: 'Toyota-type',
  color: 'Red',
  price: 500000,
  hasAirBag: true,
  brances: {
    branchOne: 'cairo',
    branchTwo: 'giza',
  },
};

const carTwoData: Car = {
  name: 'Toyota-type',
  color: 'White',
  price: 750000,
  hasAirBag: false,
  brances: {
    branchOne: 'Bagour',
  },
};
//*  *---------------* Class ===> مبقتش مستخدمه
class CarTwo {
  name: string = '';
  color: string = '';
  hasAirBag: boolean = false;
  price: number = 0;
  branches: {
    branchOne: string;
    branchTwo: string;
  } = {
    branchOne: '',
    branchTwo: '',
  };
}

const CarThreeData: CarTwo = {
  name: 'Toyota-class',
  color: 'White',
  price: 750000,
  hasAirBag: false,
  branches: {
    branchOne: 'Bagour',
    branchTwo: 'Dokki',
  },
};

//*  *---------------* InterFace
interface CarThree {
  name: string;
  color: string;
  price: number;
  hasAirBag: boolean;
  branches: {
    branchOne: string;
    branchTwo?: string;
  };
}
//& interFace VS type
// ^  =>  interFace Re-open ==> يعنى اقدر ازود  property جديده

// &  ===> Extend
// interface CarThree {
//   model: number;
// }

type CarInfo = Car & {
  model: string;
};

// ^  => Extend InterFace  => بس بأسم مختلف

interface CarInfoExtend extends CarThree {
  modelExtend: number;
}

const CarFourData: CarThree = {
  name: 'Toyota-interface',
  color: 'White',
  price: 750000,
  hasAirBag: false,
  branches: {
    branchOne: 'Bagour',
  },
};
const CarFiveData: CarInfoExtend = {
  name: 'Toyota-interface',
  color: 'White',
  price: 750000,
  modelExtend: 2025,
  hasAirBag: false,
  branches: {
    branchOne: 'Bagour',
  },
};

//*[6] function Parameters and Return Types :

//^ Emplist Return ==> void => no return

function calc(num1: number, num2: number): void {
  console.log(num1 + num2);
}
calc(10, 10);

function calcTwo(num3: number, num4: number): number {
  return num3 + num4;
}
calcTwo(10, 10);

//! user Defined error

//^  after throw  ===> unreachable code detected ==> never return

function showError(msg: string): never {
  throw new Error(msg);
}

//^ "noUnusedParameters": true,

/* function test(num3: number, num4: number, num5: number): number {
  return num3 + num4;
}
test(10, 10, 20);
 */

//*[7] Special Types in TS - Any and Unknown :

let str1: any = 'any';
str1.push(); //! ❌ no type Safety

let str2: unknown = 'unknown';

// str2.PushManager(); //* ✅ no type Safety

if (typeof str2 === 'number') {
  str2.toFixed();
}
if (typeof str2 === 'string') {
  str2.toLowerCase();
}
if (Array.isArray(str2)) {
  str2.push();
}

//*[8] Generics ===>

function reverseNumber(arr: number[]): number[] {
  let result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseNumber([1, 2, 3]));

function reverseString(arr: string[]): string[] {
  let result: string[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseString(['1', '2', '3']));

// ? ===> Generics

function generics<Type>(arr: Type[]): Type[] {
  let result: Type[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(generics<string>(['1', '2', '3']));
console.log(generics<number>([1, 2, 3]));
