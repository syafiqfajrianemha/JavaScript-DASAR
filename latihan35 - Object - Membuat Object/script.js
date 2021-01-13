// Membuat Object
// 1. Object Literal
var siswa1 = {
    nama: "Syafiq Fajrian Emha",
    nis: "16143",
    email: "syafiqemha2018@gmail.com",
    jurusan: "Rekayasa Perangkat Lunak"
}

var siswa2 = {
    nama: "Diky Sukisno",
    nis: "16132",
    email: "dikysukisno@yahoo.com",
    jurusan: "Rekayasa Perangkat Lunak"
}

// 2. Function Declaration
function buatObjectSiswa(nama, nis, email, jurusan) {
    var siswa = {};
    siswa.nama = nama;
    siswa.nis = nis;
    siswa.email = email;
    siswa.jurusan = jurusan;
    return siswa;
}

var siswa3 = buatObjectSiswa(
    'Deva Wibowo',
    '16234',
    'devawibowo@yahoo.com',
    'Teknik Komputer Jaringan'
)

// 3. Constructor
function Siswa(nama, nis, email, jurusan) {
    this.nama = nama;
    this.nis = nis;
    this.email = email;
    this.jurusan = jurusan;
}

var siswa4 = new Siswa(
    "Adi Anggora",
    "16135",
    "adianggora@src.id",
    "Pemasaran"
)