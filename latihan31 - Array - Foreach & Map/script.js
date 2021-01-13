// 6. Foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['Syafiq', 'Diki', 'Deva'];
// angka.forEach(function (e) {
//     console.log(e);
// })
// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
// })

// 7. Map
// mengembalikan array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var hasil = angka.map(function (e) {
//     return e * 2;
// })
// console.log(hasil.join(' - '));

// 8. Sort
var angka = [6, 4, 8, 20, 5, 1, 7, 3];
angka.sort(function (a, b) {
    return a - b;
});
console.log(angka.join(' - '));