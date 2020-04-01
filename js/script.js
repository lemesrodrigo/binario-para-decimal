let binary = document.querySelector("#bin_input");
let btn = document.querySelector("button");
let decimal = document.querySelector("#dec_output");
let decContainer = document.querySelector(".result");
btn.addEventListener('click', checkInput);

function checkInput() {
    if (isValid()) {
        let res = convertBin2Dec(binary.value);
        decContainer.style.display = "block";
        decimal.value = res;
    }
}

function isValid() {
    const value = binary.value;
    const allowed = /^[0-1]+$/;
    if (value == "") {
        alert('O campo deve estar preenchido');
        return false;
    } else if (isNaN(value) || !value.match(allowed)) {
        alert('O valor inserido deve ser um numero binário (apenas 0 ou 1)');
        return false;
    } else if (value.length > 8) {
        alert('O valor inserido não deve ser maior que 8');
        return false;
    }

    return true;
}

function convertBin2Dec(_binary) {
    let decNumber = [];
    let length = _binary.length;
    for (let i = 0; i < _binary.length; i++) {
        length--;
        let res = (Math.pow(2, length)) * parseInt(_binary.charAt(i));
        decNumber[i] = res;
    }
    //Soma todos os valores de um array
    const sum = decNumber.reduce((partial_sum, a) => partial_sum + a, 0);
    return sum;
}