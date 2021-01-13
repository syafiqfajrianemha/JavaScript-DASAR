// function tambah(a, b) {
//     return a + b;
// }
function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(3, 10, 7);
console.log(coba);

// function kali(a, b) {
//     return a * b;
// }
// var a = parseInt(prompt('Masukan Nilai ke-1 :'));
// var b = parseInt(prompt('Masukan Nilai ke-2 :'));
// var hasil = tambah(3, 4, 5);
// var hasil = kali(tambah(2, 1), tambah(5, 2));
// console.log(hasil);