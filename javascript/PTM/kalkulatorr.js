let bil1 = document.querySelector("#bil1");
let bil2 = document.querySelector("#bil2");
let hasil = document.querySelector("#hasil");


kali.onclick = function () {
    //alert ("kali");
    let a = bil1.value;
    let b = bil2.value;
    let c = a * b;

    hasil.innerHTML = c;
}

bagi.onclick = function () {
    alert ("bagi");
}

tambah.onclick = function () {
    alert ("tambah");
}

tambah.onclick = function () {
    alert ("kurang");
}

