// 9. Filter
// mengembalikan banyak nilai
// var angka = [1, 2, 3, 5, 10, 9, 8, 6, 11];
// var angka2 = angka.filter(function (x) {
//     return x > 5;
// })
// console.log(angka2.join(' - '));

// 10. Find
// mengembalikan 1 nilai
var angka = [1, 2, 3, 5, 10, 9, 8, 6, 11];
var angka2 = angka.find(function (x) {
    return x > 5;
})
console.log(angka2);