// Manipulasi Array

// 1. Menambah isi Array
// var arr = [];
// arr[0] = 'syafiq';
// arr[1] = 'Fajrian';
// arr[2] = 'Emha';
// console.log(arr[0]);

// 2. Menghapus isi Array
// var arr = ['syafiq', 'fajrian', 'emha'];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array
// var arr = ['syafiq', 'fajrian', 'emha'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);
// }

// Method Array

// 1. Join
// var arr = ['syafiq', 'fajrian', 'emha'];
// console.log(arr.join(' - '));

// 2. Push & Pop
// var arr = ['syafiq', 'fajrian', 'emha'];
// arr.push('diki');
// arr.pop();
// console.log(arr.join(' - '));

// 3. Unshift & shift
var arr = ['syafiq', 'fajrian', 'emha'];
// arr.unshift('diki');
arr.shift();
console.log(arr.join(' - '));