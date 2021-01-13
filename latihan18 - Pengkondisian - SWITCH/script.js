var item = prompt('masukan nama makanan / minuman : \n(cth: nasi, daging, susu, hamburger, greentea)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger':
    case 'greentea':
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('makanan / minuman SALAH!');
        break;
}