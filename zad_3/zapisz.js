const imie = document.querySelector("#imie");
const nazwisko = document.querySelector("#nazwisko");
const adres = document.querySelector("#adres");
const czyscBtn = document.querySelector("#czysc");
const zapiszBtn = document.querySelector("#zapisz");

const display = document.querySelector("#display");
const form = document.querySelector('form');

let userArr = [];

function duzaLitera(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

zapiszBtn.addEventListener('click', evt =>{
    evt.preventDefault();
    if(imie.value == "" || nazwisko.value == "" ||adres.value == ""){
        alert("Wypełnij wszystkie pola!");
    }else{
        const user = {
            imieVal: duzaLitera(imie.value),
            nazwiskoVal: duzaLitera(nazwisko.value),
            adresVal: duzaLitera(adres.value),
        };
        userArr.push(user);
        const p = document.createElement("p");
        p.innerHTML = `<span> <strong>${user.imieVal} ${user.nazwiskoVal}</strong> zamieszkały w: <strong>${user.adresVal}</strong> </span>`;
        display.appendChild(p);
    }
});

czyscBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    form.reset();
});
