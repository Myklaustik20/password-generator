const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*_+=";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", ()=> {
    let initPass = empty;
    (upperCase.checked) ? initPass += uCase : "";
    (lowerCase.checked) ? initPass += lCase : "";
    (pNumber.checked) ? initPass += number : "";
    (pSymbol.checked) ? initPass += symbol : "";

    password.value = generatePassword(pLength.value, initPass)
})

function generatePassword(length, initPass) {
    let pass = "";
    for(let i = 0; i < length; i++) {
        pass += initPass.charAt(Math.floor(Math.random() * initPass.length));
    }

    return pass;
}

const copy = document.getElementById("copy");

copy.addEventListener("click", ()=> {
    if (password.value == "") {
        alert("Please generate a password.")
    } else {
        password.select();
        document.execCommand("copy");
        alert("Password copied to clipboard.");
    }
})