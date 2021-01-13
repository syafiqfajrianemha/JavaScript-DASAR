var tanya = true;
while (tanya) {
    // menangkap pilihan player 
    var p = prompt('pilih : gajah, semut, orang');

    // menangkap pilihan komputer 
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'Kamu MENANG!' : 'Kamu KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'Kamu KALAH!' : 'Kamu MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'Kamu KALAH!' : 'Kamu MENANG!';
    } else {
        hasil = 'kamu memasukan pilihan yang salah!';
    }

    // tampilkan hasilnya
    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : ' + hasil);

    tanya = confirm('lagi?');
}

alert('terimkasih sudah bermain.');