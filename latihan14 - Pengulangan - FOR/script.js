var jmlAngkot = 10;
var angkotBeroprasi = 7;
var noAngkot = 1;

while (noAngkot <= angkotBeroprasi) {
    console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
    noAngkot++;
}

for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' tidak beroprasi dengan baik.');
}