// alert('Hello World');
// var nama = prompt('nama saya : ');
// alert('nama saya adalah ' + nama);
// var tes = confirm('anda yakin ?');
// if (tes === true) {
//     alert('user menekan tombol OK!');
// } else {
//     alert('user menekan tombol CANCEL!');
// }
alert('Selamat datang...');
var lagi = true;

while (lagi) {
    var nama = prompt('masukan nama : ');
    alert('selamat datang ' + nama);

    lagi = confirm('mau lagi ?');
}

alert('terimakasih');