const namaBarang = document.getElementById('namaBarang');
const harga = document.getElementById('harga');
const jumlah = document.getElementById('jumlah');
const total = document.getElementById('total');
const diskon = document.getElementById('diskon');
const bayar = document.getElementById('bayar');
const btnProces = document.getElementById('proces');
const btnReset = document.getElementById('reset');

btnProces.addEventListener('click', function (){
    total.value = harga.value * jumlah.value;
    diskon.value = 0.1 * total.value;
    bayar.value = total.value - bayar.value;
});

btnReset.addEventListener('click', function () {
    namaBarang.value = "";
    harga.value = "";
    jumlah.value = "";
    total.value = "";
    diskon.value = "";
    bayar.value = "";
});

