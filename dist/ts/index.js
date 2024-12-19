"use strict";
// *[1] Built-in Types =>String ,number ,Boolean , null , undefined :
let userName = 'refai';
userName = 'ahmed refai';
let age = 21;
age = 22;
let checked = false;
checked = true;
let data = null;
let x;
//*[2]  User Defined Types ==> Array , Unions :
let empty = [];
let frinds = ['ahmed', 'khaled', 'refai'];
let numbers = [10, 20, 30, 40, 50];
let employee = [22, 'Ahmed Khaled'];
let userAge = 10;
userAge = 'ten';
//*[3]  User Defined Types - Tuples :
///!   لازم ترتيب -لازم تعمل شكل معين وعدد معين
//^ >===> ["corlla","Toyota",500000]
const car = ['corlla', 'Toyota', 500000];
const arr = ['refai', 22, false];
const arr2 = ['ahmed', 21, true];
const carData = {
    name: 'Toyota-type',
    color: 'Red',
    price: 500000,
    hasAirBag: true,
    brances: {
        branchOne: 'cairo',
        branchTwo: 'giza',
    },
};
const carTwoData = {
    name: 'Toyota-type',
    color: 'White',
    price: 750000,
    hasAirBag: false,
    brances: {
        branchOne: 'Bagour',
        branchTwo: 'Dokki',
    },
};
//*  *---------------* Class ===> مبقتش مستخدمه
class CarTwo {
    constructor() {
        this.name = '';
        this.color = '';
        this.hasAirBag = false;
        this.price = 0;
        this.branches = {
            branchOne: '',
            branchTwo: '',
        };
    }
}
const CarThreeData = {
    name: 'Toyota-class',
    color: 'White',
    price: 750000,
    hasAirBag: false,
    branches: {
        branchOne: 'Bagour',
        branchTwo: 'Dokki',
    },
};
const CarFourData = {
    name: 'Toyota-interface',
    color: 'White',
    price: 750000,
    hasAirBag: false,
    branches: {
        branchOne: 'Bagour',
    },
};
//# sourceMappingURL=index.js.map