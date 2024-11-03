var tanggal = document.getElementById("tanggal");
var bulan = document.getElementById("bulan");
var tahun = document.getElementById("tahun");
var absenIcon = document.querySelector(".absen-icon");
var absenText = document.getElementById("absen-text");
const d = new Date();
const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Augustus","September","Oktober","November","Desember"];
let month = months[d.getMonth()];
tanggal.innerHTML = d.getDate();
bulan.innerHTML = month;
tahun.innerHTML = d.getFullYear();

function absen() {
    absenIcon.name = "checkmark-circle";
    absenIcon.style.color = "#7dc767";
    absenText.innerHTML = "SUDAH ABSEN";
    absenText.style.color = "#7dc767";
}