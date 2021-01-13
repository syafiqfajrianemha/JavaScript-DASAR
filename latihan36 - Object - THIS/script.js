// this
// var a = 10;
// console.log(window.a);

// membuat object

// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('Hello World!');
// }
// this.halo();
// this pada function declaration yaitu mengembalikan Object Global 

// cara 2 - object literal
// var obj = {
//     a: 10,
//     nama: 'Syafiq Fajrian Emha'
// };
// obj.halo = function () {
//     console.log(this);
//     console.log('Hello World!');
// }
// obj.halo();
// this pada object literal yaitu mengembalikan Object yang bersangkutan

// cara 3 - constructor 
function Halo() {
    console.log(this);
    console.log('Hello World!');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this pada constructor yaitu mengembalikan Object yang baru dibuat 