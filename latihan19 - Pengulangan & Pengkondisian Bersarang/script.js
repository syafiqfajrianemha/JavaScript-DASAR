var string = '';
for (var angka = 5; angka > 0; angka--) {
    for (var i = 0; i < angka; i++) {
        string += '*';
    }
    string += '\n';
}
console.log(string);